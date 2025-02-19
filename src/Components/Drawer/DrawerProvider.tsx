import { useMemo, useState } from "react";
import Drawer from "./Drawer";
import { DrawerContext } from "./DrawerContext";
import { DrawerContainer } from "./DrawerStyles";
import { mockNoteEntries, mockFoodEntries } from "../../mockData";
import { NoteEntry, Product, FoodEntry, emptyNoteEntry } from "../../types";
import { useFoodEntriesStore, useNoteEntriesStore, useDiaryDrawerStore } from "../../store";


type DrawerType = {
    content: React.ReactNode
};

interface Props {
    children: React.ReactNode;
}

const DrawerProvider = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<string | null>(null);

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
    }), []);

    return (
        <DrawerContext.Provider value={contextValue}>
            {children}

            <Drawer
                isOpen={isOpen}
                close={closeDrawer}
                content={content}
            />

        </DrawerContext.Provider>
    );
};


export default DrawerProvider;
