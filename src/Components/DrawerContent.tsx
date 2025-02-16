import { FlexBox, Typography, TextArea } from "../styledComponents";
import Button from "./Button";
import FoodForm from "./FoodForm";
import Input from "./Input";
import SearchInputBox from "./SearchInputBox";
import WeightChart from "./WeightChart";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { NoteEntry, Product } from "../types";
import { useEffect, useState } from "react";

interface Props {
    drawerContent: string | null;
    closeDrawer: () => void;
    selectedProduct?: Product | null;
    setSelectedProduct?: (product: Product | null) => void;
    noteEntry: NoteEntry;
    noteEntries: NoteEntry[];
    setNoteEntries: (noteEntries: NoteEntry[]) => void;

}

const DrawerContent = ({ drawerContent, closeDrawer, selectedProduct, setSelectedProduct, noteEntry, noteEntries, setNoteEntries }: Props) => {
    const [currentNote, setCurrentNote] = useState<NoteEntry>(noteEntry || { id: -1, content: "" })

    useEffect(() => {
        if (noteEntry) {
            setCurrentNote(noteEntry);
        }
    }, [noteEntry])

    const onSaveNoteEntry = () => {
        if (currentNote.id < 0) {
            const newNoteEntry: NoteEntry = {
                id: noteEntries.length + Math.random() * 1000,
                title: currentNote.title,
                content: currentNote.content
            }
            setNoteEntries([...noteEntries, newNoteEntry])
        } else {
            const updatedNoteEntries = noteEntries.map(noteEntry => currentNote.id === noteEntry.id ? { ...noteEntry, title: currentNote.title || "Note", content: currentNote.content } : noteEntry)
            setNoteEntries(updatedNoteEntries);
        }
    }

    const onDeleteNoteEntry = () => {
        const updatedNoteEntries = noteEntries.filter(noteEntry => noteEntry.id !== currentNote.id)
        setNoteEntries(updatedNoteEntries);
        closeDrawer();
    }

    if (drawerContent === "LogFood" && setSelectedProduct) {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
                <SearchInputBox expanded={!selectedProduct} onSetSelectedProduct={setSelectedProduct} />
                {/* {selectedProduct && } */}
                <FoodForm product={selectedProduct || null} discardProduct={() => setSelectedProduct(null)} />
            </FlexBox>
        )
    }

    if (drawerContent === "LogWeight") {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>Log Your Weight</Typography>
                <WeightChart />
                <Input prefix="Weight (kg)" type="number" />
                <Button style={{ width: "100%" }} Icon={CheckIcon}>Log this Weight</Button>
            </FlexBox>
        )
    }

    if (drawerContent === "AddNote") {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>{currentNote.id > 0 ? `Edit Note` : `Write a Note`}</Typography>
                <Input prefix="Title" placeholder="Note" value={currentNote.title} onChange={e => setCurrentNote(prev => ({ ...prev, title: e.target.value }))} />
                <TextArea placeholder="Write your note here" expandable value={currentNote.content} onChange={e => setCurrentNote(prev => ({ ...prev, content: e.target.value }))} />
                <FlexBox column width="100%">
                    <Button onClick={onSaveNoteEntry} style={{ width: "100%" }} Icon={CheckIcon}>{currentNote.id > 0 ? `Save Changes` : `Add this Note`}</Button>
                    {currentNote.id >= 0 && <Button onClick={onDeleteNoteEntry} style={{ width: "100%" }} Icon={DeleteIcon}>Delete this Note</Button>}
                </FlexBox>
            </FlexBox>
        )
    }

    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Empty</Typography>
        </FlexBox>
    )
}

export default DrawerContent;