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
                <Typography bold style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
                <SearchInputBox />

                <FlexBox column width="95%" gap="xl" >

                    <FlexBox column>
                        <Typography bold>Test item</Typography>
                        <Typography size="s" color="grey">{"(12 protein, 4 fat, 102.5 carbohydrates, 346 calories)"}</Typography>
                    </FlexBox>
                    <FlexBox gap="m">
                        <Input prefix="Quantity (g)" />
                        <Input type="time" prefix="Timestamp" />
                    </FlexBox>
                    <FlexBox column>
                        <Button Icon={CheckIcon}>Add to Diary</Button>
                        <Button Icon={DeleteIcon} >Discard</Button>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        )
    }
    const renderLogWeight = () => {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bold style={{ marginBottom: "20px" }}>Log Your Weight</Typography>
                <WeightChart />
                <Input prefix="Weight (kg)" type="number" />
                <Button style={{ width: "100%" }} Icon={CheckIcon}>Log this Weight</Button>
            </FlexBox>
        )
    }
    const renderAddNote = () => {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bold style={{ marginBottom: "20px" }}>Write a Note</Typography>
                <Input prefix="Title" placeholder="Note" />
                <TextArea placeholder="Write your note here" expandable />
                <Button style={{ width: "100%" }} Icon={CheckIcon}>Add this Note</Button>
            </FlexBox>
        )
    }
    return (
        <>
            <PageHeader>Diary</PageHeader>
            <Drawer isOpen={isDrawerOpen} setOpen={setIsDrawerOpen} >{drawerContent}</Drawer>
            <PageBody>
                <Calendar />
                <FlexBox>
                    <Button onClick={() => openDrawer("LogFood")} Icon={AppleIcon}>Log Food</Button>
                    <Button onClick={() => openDrawer("LogWeight")} Icon={ScaleIcon}>Log Weight</Button>
                    <Button onClick={() => openDrawer("AddNote")} Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary />
                <Note>Today I fucked my cat and it was wonderful, it felt so tight and I came so fast that it didn't even have time to scratch me that bad. <br></br><br></br>Today I also realised that I am gay.</Note>
            </PageBody>
        </>
    )
}

export default Diary