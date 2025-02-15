import { FlexBox, PageHeader } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as FoodIcon } from "../../icons/foods_2.svg";

function Foods() {
    return (
        <>
            <PageHeader>Foods</PageHeader>
            <FlexBox >
                <Button Icon={FoodIcon}>Create Food</Button>
            </FlexBox>
        </>
    )
}

export default Foods;