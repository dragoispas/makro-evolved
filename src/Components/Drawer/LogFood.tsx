import { FlexBox, Typography } from "../../styledComponents"
import { FoodEntry, Product } from "../../types";
import FoodForm from "./FoodForm"
import SearchInputBox from "../SearchInputBox"

interface Props {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
    foodEntries: FoodEntry[];
    setFoodEntries: (foodEntries: FoodEntry[]) => void;
}

const LogFood = ({ selectedProduct, setSelectedProduct, foodEntries, setFoodEntries }: Props) => {



    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
            <SearchInputBox expanded={!selectedProduct} onSetSelectedProduct={setSelectedProduct} />
            {/* {selectedProduct && } */}
            <FoodForm foodEntries={foodEntries} setFoodEntries={setFoodEntries} product={selectedProduct || null} discardProduct={() => setSelectedProduct(null)} />
        </FlexBox>
    )
}

export default LogFood;