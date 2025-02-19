import { useEffect, useState } from "react"
import { FlexBox, Typography, TextArea } from "../../styledComponents"
import { NoteEntry } from "../../types"
import Button from "../Button"
import Input from "../Input"
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { useToast } from "../Toast/ToastContext"
import { useDrawer } from "./DrawerContext"
import { useNoteEntriesStore, useDiaryDrawerStore } from "../../store"


const AddNote = () => {
    const toast = useToast();
    const drawer = useDrawer();
    const { selectedNoteEntry } = useDiaryDrawerStore();
    const { noteEntries, addNoteEntry, updateNoteEntry, deleteNoteEntry } = useNoteEntriesStore();
    const [currentNote, setCurrentNote] = useState<NoteEntry>(selectedNoteEntry)

    useEffect(() => {
        if (selectedNoteEntry) {
            setCurrentNote(selectedNoteEntry);
        }
    }, [selectedNoteEntry])

    const onSaveNoteEntry = () => {
        if (currentNote.id < 0) {
            const newNoteEntry: NoteEntry = {
                id: noteEntries.length + Math.random() * 1000,
                title: currentNote.title,
                content: currentNote.content
            }
            addNoteEntry(newNoteEntry)
        } else {
            updateNoteEntry(currentNote.id, { title: currentNote.title || "Note", content: currentNote.content });
        }
        drawer.close();
        toast?.success();
    }

    const onDeleteNoteEntry = () => {
        deleteNoteEntry(currentNote.id);
        drawer.close();
        toast?.success();
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