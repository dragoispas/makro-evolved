import { FlexBox, Typography } from "../../styledComponents";
import { FoodEntry, NoteEntry, Product } from "../../types";
import LogFood from "./LogFood";
import LogWeight from "./LogWeight";
import AddNote from "./AddNote";
import EditFoodEntry from "./EditFoodEntry";

interface Props {
    drawerContent: string | null;
    closeDrawer: () => void;
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
    noteEntry: NoteEntry;
    noteEntries: NoteEntry[];
    setNoteEntries: (noteEntries: NoteEntry[]) => void;
    foodEntries: FoodEntry[];
    selectedFoodEntry: FoodEntry | null;
    setFoodEntries: (foodEntries: FoodEntry[]) => void;

}

const DrawerContent = ({ drawerContent, closeDrawer, selectedProduct, setSelectedProduct, noteEntry, noteEntries, setNoteEntries, foodEntries, setFoodEntries, selectedFoodEntry }: Props) => {

    if (drawerContent === "LogFood") {
        return (
            <LogFood foodEntries={foodEntries} setFoodEntries={setFoodEntries} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        )
    }

    if (drawerContent === "LogWeight") {
        return (
            <LogWeight />
        )
    }

    if (drawerContent === "Note") {
        return (
            <AddNote noteEntries={noteEntries} noteEntry={noteEntry} setNoteEntries={setNoteEntries} closeDrawer={closeDrawer} />
        )
    }

    if (drawerContent === "EditFood") {
        return (
            <EditFoodEntry foodEntries={foodEntries} foodEntry={selectedFoodEntry} setFoodEntries={setFoodEntries} closeDrawer={closeDrawer} />
        )
    }

    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Empty</Typography>
        </FlexBox>
    )
}

export default DrawerContent;