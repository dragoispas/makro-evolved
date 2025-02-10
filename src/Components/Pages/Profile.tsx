import { FlexBox } from "../../styledComponents";

function Profile() {
    return (
        <FlexBox column width='calc(100vw - 80px)'>
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Profile</FlexBox>
        </FlexBox>
    )
}

export default Profile;