import { FlexBox } from "../../styledComponents";

function Dashboard() {
    return (
        <FlexBox column width='calc(100vw - 80px)' >
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Dashboard</FlexBox>
        </FlexBox>
    )
}

export default Dashboard