import { FlexBox, PageBody, PageHeader, TextArea, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";
import Note from "../Note";
import FoodDiary from "../FoodDiary";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import Input from "../Input";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import SearchInputBox from "../SearchInputBox";
import WeightChart from "../WeightChart";
import FoodForm from "../FoodForm";
import { Product } from "../../types";
import { mockNote } from "../../mockData";

function Diary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState<string | null>();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openDrawer = (content: string) => {
        setIsDrawerOpen(true)
        setDrawerContent(content);
    }

    const renderDrawerContent = () => {
        if (drawerContent === "LogFood") {
            return (
                <FlexBox column align="center" gap="l" width="100%" height="100%">
                    <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
                    <SearchInputBox expanded={!selectedProduct} onSetSelectedProduct={setSelectedProduct} />
                    {/* {selectedProduct && } */}
                    <FoodForm product={selectedProduct} discardProduct={() => setSelectedProduct(null)} />
                </FlexBox>
            )
        } else if (drawerContent === "LogWeight") {
            return (
                <FlexBox column align="center" gap="l" width="100%" height="100%">
                    <Typography bolder style={{ marginBottom: "20px" }}>Log Your Weight</Typography>
                    <WeightChart />
                    <Input prefix="Weight (kg)" type="number" />
                    <Button style={{ width: "100%" }} Icon={CheckIcon}>Log this Weight</Button>
                </FlexBox>
            )
        } else if (drawerContent === "AddNote") {
            return (
                <FlexBox column align="center" gap="l" width="100%" height="100%">
                    <Typography bolder style={{ marginBottom: "20px" }}>Write a Note</Typography>
                    <Input prefix="Title" placeholder="Note" />
                    <TextArea placeholder="Write your note here" expandable />
                    <Button style={{ width: "100%" }} Icon={CheckIcon}>Add this Note</Button>
                </FlexBox>
            )
        }
    }


    return (
        <>
            <PageHeader>Diary</PageHeader>
            <Drawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} >{renderDrawerContent()}</Drawer>
            <PageBody>
                <Calendar />
                <FlexBox>
                    <Button onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button onClick={() => openDrawer("AddNote")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary />
                <Note text={mockNote}></Note>
            </PageBody>
        </>
    )
}

export default Diary