import { createContext, useContext } from "react";
import { FoodEntry, NoteEntry, Product } from "../../types";

export type DrawerContextType = {
    open: (content: string) => void;
    close: () => void;
    setFoodEntries: React.Dispatch<React.SetStateAction<FoodEntry[]>>;
    setNoteEntries: React.Dispatch<React.SetStateAction<NoteEntry[]>>;
    setSelectedFoodEntry: React.Dispatch<React.SetStateAction<FoodEntry | null>>;
    setSelectedNoteEntry: React.Dispatch<React.SetStateAction<NoteEntry>>;
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawer = () => useContext(DrawerContext);