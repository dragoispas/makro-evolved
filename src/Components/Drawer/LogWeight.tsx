import { FlexBox, Typography } from "../../styledComponents"
import Button from "../Button"
import Input from "../Input"
import WeightChart from "../WeightChart"
import { ReactComponent as CheckIcon } from "../../icons/check.svg";

const LogWeight = () => {
    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Log Your Weight</Typography>
            <WeightChart />
            <Input prefix="Weight (kg)" type="number" />
            <Button style={{ width: "100%" }} Icon={CheckIcon}>Log this Weight</Button>
        </FlexBox>
    )
}

export default LogWeight;