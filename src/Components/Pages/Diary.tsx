import { FlexBox, PageBody, PageHeader, TextArea, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";
import Note from "../Note";
import FoodDiary from "../FoodDiary";
import { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import { FoodEntry, NoteEntry, Product } from "../../types";
import { mockFoodEntries, mockNoteEntry, mockNoteEntries } from "../../mockData";
import DrawerContent from "../Drawer/DrawerContent";

const emptyNoteEntry: NoteEntry = { id: -1, title: "", content: "" };

function Diary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState<string | null>(null);

    const [noteEntries, setNoteEntries] = useState<NoteEntry[]>(mockNoteEntries);
    const [selectedNoteEntry, setSelectedNoteEntry] = useState<NoteEntry>(emptyNoteEntry);

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(mockFoodEntries)
    const [selectedFoodEntry, setSelectedFoodEntry] = useState<FoodEntry | null>(null)

    const openDrawer = (content: string) => {
        setIsDrawerOpen(true)
        setSelectedNoteEntry(emptyNoteEntry);
        setDrawerContent(content);
    }

    const onClickNoteEntry = (noteEntry: NoteEntry) => {
        openDrawer("Note");
        setSelectedNoteEntry(noteEntry);
    }
    const onClickFoodEntry = (foodEntry: FoodEntry) => {
        openDrawer("EditFood");
        setSelectedFoodEntry(foodEntry);
    }

    return (
        <>
            <PageHeader>Diary</PageHeader>
            <Drawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} >
                <DrawerContent closeDrawer={() => setIsDrawerOpen(false)} drawerContent={drawerContent} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} noteEntry={selectedNoteEntry || emptyNoteEntry} noteEntries={noteEntries} setNoteEntries={setNoteEntries} foodEntries={foodEntries} setFoodEntries={setFoodEntries} selectedFoodEntry={selectedFoodEntry} />
            </Drawer>
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