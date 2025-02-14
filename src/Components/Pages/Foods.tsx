import { FlexBox } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as FoodIcon } from "../../icons/foods_2.svg";

function Foods() {
    return (
        <FlexBox column width='calc(100vw - 80px)'>
            <FlexBox height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Foods</FlexBox>
            <div style={{ margin: "20px" }}>
                <Button Icon={FoodIcon}>Create Food</Button>
            </div>
        </FlexBox>
    )
}

export default Foods;