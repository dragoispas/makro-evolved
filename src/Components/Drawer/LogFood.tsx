import { FlexBox, Typography } from "../../styledComponents"
import { Product } from "../../types";
import FoodForm from "./FoodForm"
import SearchInputBox from "../SearchInputBox"

interface Props {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
}

const LogFood = ({ selectedProduct, setSelectedProduct }: Props) => {
    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
            <SearchInputBox expanded={!selectedProduct} onSetSelectedProduct={setSelectedProduct} />
            {/* {selectedProduct && } */}
            <FoodForm product={selectedProduct || null} discardProduct={() => setSelectedProduct(null)} />
        </FlexBox>
    )
}

export default LogFood;