import { FlexBox } from "../../styledComponents";

function Trends() {
    return (
        <FlexBox column width='calc(100vw - 80px)'>
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Trends</FlexBox>
        </FlexBox>
    )
}

export default Trends;