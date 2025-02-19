import { FlexBox, Typography } from "../../styledComponents"
import { FoodEntry, Product } from "../../types";
import FoodForm from "./FoodForm"
import { useDrawer } from "./DrawerContext";
import SearchInputBox from "./SearchInputBox";
import { useFoodEntriesStore, useDiaryDrawerStore } from "../../store";


const LogFood = () => {
    const { foodEntries } = useFoodEntriesStore();
    const { selectedProduct } = useDiaryDrawerStore();

    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Add Food to Diary</Typography>
            <SearchInputBox expanded={!selectedProduct} />
            {/* {selectedProduct && } */}
            <FoodForm foodEntries={foodEntries} product={selectedProduct || null} />
        </FlexBox>
    )
}

export default LogFood;