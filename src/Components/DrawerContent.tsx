import { FlexBox, Typography, TextArea } from "../styledComponents";
import Button from "./Button";
import FoodForm from "./FoodForm";
import Input from "./Input";
import SearchInputBox from "./SearchInputBox";
import WeightChart from "./WeightChart";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { Product } from "../types";

interface Props {
    drawerContent: string | null;
    selectedProduct?: Product | null;
    setSelectedProduct?: (product: Product | null) => void;

}

const DrawerContent = ({ drawerContent, selectedProduct, setSelectedProduct }: Props) => {
    if (drawerContent === "LogFood" && setSelectedProduct) {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
                <SearchInputBox expanded={!selectedProduct} onSetSelectedProduct={setSelectedProduct} />
                {/* {selectedProduct && } */}
                <FoodForm product={selectedProduct || null} discardProduct={() => setSelectedProduct(null)} />
            </FlexBox>
        )
    }

    if (drawerContent === "LogWeight") {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>Log Your Weight</Typography>
                <WeightChart />
                <Input prefix="Weight (kg)" type="number" />
                <Button style={{ width: "100%" }} Icon={CheckIcon}>Log this Weight</Button>
            </FlexBox>
        )
    }

    if (drawerContent === "AddNote") {
        return (
            <FlexBox column align="center" gap="l" width="100%" height="100%">
                <Typography bolder style={{ marginBottom: "20px" }}>Write a Note</Typography>
                <Input prefix="Title" placeholder="Note" />
                <TextArea placeholder="Write your note here" expandable />
                <Button style={{ width: "100%" }} Icon={CheckIcon}>Add this Note</Button>
            </FlexBox>
        )
    }

    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Empty</Typography>
        </FlexBox>
    )
}

export default DrawerContent;