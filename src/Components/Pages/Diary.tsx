import { FlexBox, Paper, Paper2 } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";
import Note from "../Note";
import FoodDiary from "../FoodDiary";

function Diary() {
    return (
        <FlexBox column width='calc(100vw - 80px)'>
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Diary</FlexBox>
            <div style={{ margin: "20px" }}>
                <Calendar />
                <FlexBox gap="s">
                    <Button Icon={AppleIcon}>Log Food</Button>
                    <Button Icon={ScaleIcon}>Log Weight</Button>
                    <Button Icon={NoteIcon}>Add Note</Button>
                </FlexBox>
                <FoodDiary />
                <Note>Today I fucked my cat and it was wonderful, it felt so tight and I came so fast that it didn't even have time to scratch me that bad. <br></br><br></br>Today I also realised that I am gay.</Note>
            </div>
        </FlexBox>
    )
}

export default Diary