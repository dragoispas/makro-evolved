import { useMemo, useState } from "react";
import Drawer from "./Drawer";
import { DrawerContext } from "./DrawerContext";
import { DrawerContainer } from "./DrawerStyles";
import { mockNoteEntries, mockFoodEntries } from "../../mockData";
import { NoteEntry, Product, FoodEntry, emptyNoteEntry } from "../../types";


type DrawerType = {
    content: React.ReactNode
};

interface Props {
    children: React.ReactNode;
}

const DrawerProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<string | null>(null);

    const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(mockFoodEntries)
    const [noteEntries, setNoteEntries] = useState<NoteEntry[]>(mockNoteEntries);

    const [selectedFoodEntry, setSelectedFoodEntry] = useState<FoodEntry | null>(null)
    const [selectedNoteEntry, setSelectedNoteEntry] = useState<NoteEntry>(emptyNoteEntry);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openDrawer = (content: string) => {
        setIsOpen(true);
        setContent(content);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const contextValue = useMemo(() => ({
        open: openDrawer,
        close: closeDrawer,
        setFoodEntries,
        setNoteEntries,
        setSelectedFoodEntry,
        setSelectedNoteEntry,
        setSelectedProduct
    }), []);

    return (
        <DrawerContext.Provider value={contextValue}>
            {children}
            <DrawerContainer isOpen={isOpen}>
                <Drawer
                    isOpen={isOpen}
                    close={closeDrawer}
                    content={content}
                    foodEntries={foodEntries}
                    noteEntries={noteEntries}
                    selectedFoodEntry={selectedFoodEntry}
                    selectedNoteEntry={selectedNoteEntry}
                    selectedProduct={selectedProduct}
                />
            </DrawerContainer>
        </DrawerContext.Provider>
    );
};


export default DrawerProvider;
