import { create } from "zustand";
import { emptyNoteEntry, FoodEntry, NoteEntry, Product } from "./types";
import { mockFoodEntries, mockNoteEntries } from "./mockData";

type FoodEntriesStore = {
    foodEntries: FoodEntry[];
    addFoodEntry: (entry: FoodEntry) => void;
    deleteFoodEntry: (id: number) => void;
    updateFoodEntry: (id: number, updatedFields: Partial<FoodEntry>) => void;
};

export const useFoodEntriesStore = create<FoodEntriesStore>((set) => ({
    foodEntries: mockFoodEntries,

    addFoodEntry: (entry) =>
        set((state) => ({
            foodEntries: [...state.foodEntries, entry],
        })),

    deleteFoodEntry: (id) =>
        set((state) => ({
            foodEntries: state.foodEntries.filter((entry) => entry.id !== id),
        })),

    updateFoodEntry: (id, updatedFields) =>
        set((state) => ({
            foodEntries: state.foodEntries.map((entry) =>
                entry.id === id ? { ...entry, ...updatedFields } : entry
            ),
        })),
}));

type NoteEntriesStore = {
    noteEntries: NoteEntry[];
    addNoteEntry: (entry: NoteEntry) => void;
    deleteNoteEntry: (id: number) => void;
    updateNoteEntry: (id: number, updatedFields: Partial<NoteEntry>) => void;
};

export const useNoteEntriesStore = create<NoteEntriesStore>((set) => ({
    noteEntries: mockNoteEntries,

    addNoteEntry: (entry) =>
        set((state) => ({
            noteEntries: [...state.noteEntries, entry],
        })),

    deleteNoteEntry: (id) =>
        set((state) => ({
            noteEntries: state.noteEntries.filter((entry) => entry.id !== id),
        })),

    updateNoteEntry: (id, updatedFields) =>
        set((state) => ({
            noteEntries: state.noteEntries.map((entry) =>
                entry.id === id ? { ...entry, ...updatedFields } : entry
            ),
        })),
}));

type DiaryDrawerStore = {
    selectedFoodEntry: FoodEntry | null;
    selectedNoteEntry: NoteEntry;
    selectedProduct: Product | null;
    setSelectedFoodEntry: (food: FoodEntry | null) => void;
    setSelectedNoteEntry: (note: NoteEntry) => void;
    setSelectedProduct: (product: Product | null) => void;
};

export const useDiaryDrawerStore = create<DiaryDrawerStore>((set) => ({
    selectedFoodEntry: null,
    selectedNoteEntry: emptyNoteEntry,
    selectedProduct: null,
    setSelectedFoodEntry: (food) => set({ selectedFoodEntry: food }),
    setSelectedNoteEntry: (note) => set({ selectedNoteEntry: note }),
    setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

