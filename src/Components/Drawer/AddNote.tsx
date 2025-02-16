import { useEffect, useState } from "react"
import { FlexBox, Typography, TextArea } from "../../styledComponents"
import { NoteEntry } from "../../types"
import Button from "../Button"
import Input from "../Input"
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";

interface Props {
    noteEntry: NoteEntry;
    noteEntries: NoteEntry[];
    setNoteEntries: (noteEntries: NoteEntry[]) => void;
    closeDrawer: () => void;
}

const AddNote = ({ noteEntries, noteEntry, setNoteEntries, closeDrawer }: Props) => {
    const [currentNote, setCurrentNote] = useState<NoteEntry>(noteEntry)

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

export default AddNote;