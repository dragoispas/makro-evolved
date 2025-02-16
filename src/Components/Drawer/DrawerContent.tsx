import { FlexBox, Typography } from "../../styledComponents";
import { NoteEntry, Product } from "../../types";
import LogFood from "./LogFood";
import LogWeight from "./LogWeight";
import AddNote from "./AddNote";

interface Props {
    drawerContent: string | null;
    closeDrawer: () => void;
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
    noteEntry: NoteEntry;
    noteEntries: NoteEntry[];
    setNoteEntries: (noteEntries: NoteEntry[]) => void;

}

const DrawerContent = ({ drawerContent, closeDrawer, selectedProduct, setSelectedProduct, noteEntry, noteEntries, setNoteEntries }: Props) => {

    if (drawerContent === "LogFood") {
        return (
            <LogFood selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
        )
    }

    if (drawerContent === "LogWeight") {
        return (
            <LogWeight />
        )
    }

    if (drawerContent === "AddNote") {
        return (
            <AddNote noteEntries={noteEntries} noteEntry={noteEntry} setNoteEntries={setNoteEntries} closeDrawer={closeDrawer} />
        )
    }

    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Empty</Typography>
        </FlexBox>
    )
}

export default DrawerContent;