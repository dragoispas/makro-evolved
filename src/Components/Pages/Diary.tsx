import { FlexBox, Paper, Paper2, ScrollableBox, SearchItem, Typography } from "../../styledComponents";
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
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import SearchInputBox from "../SearchInputBox";

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
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bold>Add Food to Diary</Typography>
                <SearchInputBox />
                <Typography bold>Test item</Typography>
                <FlexBox gap="m">
                    <Input prefix="Quantity (g)" />
                    <Input type="time" prefix="Timestamp" />
                </FlexBox>
                <Button style={{ width: "60%" }}>Add to Diary</Button>
            </FlexBox>
        )
    }
    const renderLogWeight = () => {
        return (
            <FlexBox column align="center" gap="xxl" width="100%" height="100%">
                <FlexBox>** Graph with recent weight changes **</FlexBox>
                <Input prefix="Weight" type="number" />
                <Button square selected style={{ width: "60%" }}>Save</Button>
            </FlexBox>
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
                    <Button onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button onClick={() => openDrawer("AddNote")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary />
                <Note>Today I fucked my cat and it was wonderful, it felt so tight and I came so fast that it didn't even have time to scratch me that bad. <br></br><br></br>Today I also realised that I am gay.</Note>
            </div>
        </FlexBox>
    )
}

export default Diary