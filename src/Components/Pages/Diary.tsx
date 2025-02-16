import { FlexBox, PageBody, PageHeader, TextArea, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";
import Note from "../Note";
import FoodDiary from "../FoodDiary";
import { useState } from "react";
import Drawer from "../Drawer";
import { FoodEntry, Product } from "../../types";
import { mockFoodEntries, mockNote, mockNotes } from "../../mockData";
import DrawerContent from "../DrawerContent";

function Diary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(mockFoodEntries)

    const openDrawer = (content: string) => {
        setIsDrawerOpen(true)
        setDrawerContent(content);
    }

    return (
        <>
            <PageHeader>Diary</PageHeader>
            <Drawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} >
                <DrawerContent drawerContent={drawerContent} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
            </Drawer>
            <PageBody>
                <Calendar />
                <FlexBox>
                    <Button onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button onClick={() => openDrawer("AddNote")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary foodEntries={foodEntries} />
                {mockNotes.map((note) => <Note title={note.title} text={note.content}></Note>)}
            </PageBody>
        </>
    )
}

export default Diary