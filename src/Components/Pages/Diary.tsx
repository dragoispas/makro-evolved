import { FlexBox, PageBody, PageHeader, TextArea, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";
import Note from "../Note";
import FoodDiary from "../FoodDiary";
import { useEffect, useState } from "react";
import { emptyNoteEntry, FoodEntry, NoteEntry, Product } from "../../types";
import { mockFoodEntries, mockNoteEntry, mockNoteEntries } from "../../mockData";
import DrawerProvider from "../Drawer/DrawerProvider";
import { useDrawer } from "../Drawer/DrawerContext";

function Diary() {
    const drawer = useDrawer();

    const [noteEntries, setNoteEntries] = useState<NoteEntry[]>(mockNoteEntries);
    const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(mockFoodEntries);

    const openDrawer = (content: string) => {
        drawer?.open(content)
        drawer?.setSelectedNoteEntry(emptyNoteEntry)
    }

    const onClickNoteEntry = (noteEntry: NoteEntry) => {

        drawer?.open("Note")
        drawer?.setSelectedNoteEntry(noteEntry);
    }
    const onClickFoodEntry = (foodEntry: FoodEntry) => {
        drawer?.open("EditFood")
        drawer?.setSelectedFoodEntry(foodEntry);
    }

    return (
        <>
            <PageHeader>Diary</PageHeader>

            <PageBody>
                <Calendar />
                <FlexBox>
                    <Button onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button onClick={() => openDrawer("Note")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary foodEntries={foodEntries} onClickFoodEntry={onClickFoodEntry} />
                {noteEntries.map((noteEntry) => <Note onClick={() => onClickNoteEntry(noteEntry)} title={noteEntry.title} text={noteEntry.content} key={`note-${noteEntry.id}`}></Note>)}
            </PageBody>

        </>
    )
}

export default Diary