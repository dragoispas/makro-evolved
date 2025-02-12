import { FlexBox, Paper, Paper2 } from "../../styledComponents";
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

function Diary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState<React.ReactNode | null>();

    const openDrawer = (content: string) => {

        setIsDrawerOpen(true)
        console.log(isDrawerOpen)

        if (content === "LogFood") setDrawerContent(renderLogFood());
        if (content === "LogWeight") setDrawerContent(renderLogWeight());
        if (content === "AddNote") setDrawerContent(renderAddNote());
    }

    const renderLogFood = () => {
        return (
            <FlexBox column align="center" justify="space-between" width="100%" height="100%">
                <Input prefix="Weight:" type="number" />
                <Button circular selected style={{ width: "80%" }}>Save</Button>
            </FlexBox>
        )
    }
    const renderLogWeight = () => {
        return (
            <FlexBox align="center" >Log Weight</FlexBox>
        )
    }
    const renderAddNote = () => {
        return (
            <FlexBox align="center" >Add Note</FlexBox>
        )
    }
    return (
        <FlexBox column width='calc(100vw - 80px)'>
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Diary</FlexBox>
            <Drawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} >{drawerContent}</Drawer>
            <div style={{ margin: "20px" }}>
                <Calendar />
                <FlexBox>
                    <Button circular onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button circular onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button circular onClick={() => openDrawer("AddNote")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary />
                <Note>Today I fucked my cat and it was wonderful, it felt so tight and I came so fast that it didn't even have time to scratch me that bad. <br></br><br></br>Today I also realised that I am gay.</Note>
            </div>
        </FlexBox>
    )
}

export default Diary