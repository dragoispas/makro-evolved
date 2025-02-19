import { createContext, useContext } from "react";
import { FoodEntry, NoteEntry, Product } from "../../types";

export type DrawerContextType = {
    open: (content: string) => void;
    close: () => void;
}

export const DrawerContext = createContext<DrawerContextType>({
    open: () => { },
    close: () => { },
});

export const useDrawer = () => useContext(DrawerContext);