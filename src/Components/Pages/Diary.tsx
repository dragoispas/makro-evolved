import { FlexBox, Paper, Paper2 } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as AppleIcon } from '../../icons/apple.svg';
import { ReactComponent as ScaleIcon } from '../../icons/scale.svg';
import { ReactComponent as NoteIcon } from '../../icons/note.svg';
import Calendar from "../Calendar";

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
                <Paper column gap="l" style={{ marginTop: "14px" }}>
                    <Paper2 >test</Paper2>
                    <Paper2 >test</Paper2>
                    <Paper2 >test</Paper2>
                </Paper>
            </div>
        </FlexBox>
    )
}

export default Diary