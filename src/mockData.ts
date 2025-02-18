import { FoodEntry, NoteEntry, Product } from "./types";
import { format, parseISO, set } from "date-fns";

export const mockProducts: Product[] = [
    { name: "Chicken Breast", calories: 165, macronutrients: { protein: 31, fat: 3.6, carbohydrates: 0 } },
    { name: "Salmon", calories: 208, macronutrients: { protein: 25, fat: 13, carbohydrates: 0 } },
    { name: "Eggs", calories: 155, macronutrients: { protein: 13, fat: 10, carbohydrates: 1 } },
    { name: "Greek Yogurt", calories: 100, macronutrients: { protein: 10, fat: 5, carbohydrates: 4 } },
    { name: "Tofu", calories: 144, macronutrients: { protein: 8, fat: 9, carbohydrates: 2 } },
    { name: "Almonds", calories: 579, macronutrients: { protein: 21, fat: 49, carbohydrates: 22 } },
    { name: "Peanut Butter", calories: 588, macronutrients: { protein: 25, fat: 50, carbohydrates: 20 } },
    { name: "Oats", calories: 389, macronutrients: { protein: 11, fat: 5, carbohydrates: 67 } },
    { name: "Brown Rice", calories: 216, macronutrients: { protein: 8, fat: 2, carbohydrates: 77 } },
    { name: "Lentils", calories: 116, macronutrients: { protein: 9, fat: 0.4, carbohydrates: 20 } },
    { name: "Cottage Cheese", calories: 98, macronutrients: { protein: 12, fat: 4, carbohydrates: 3 } },
    { name: "Broccoli", calories: 55, macronutrients: { protein: 2.8, fat: 0.4, carbohydrates: 11 } },
    { name: "Spinach", calories: 23, macronutrients: { protein: 2.9, fat: 0.4, carbohydrates: 3.6 } },
    { name: "Sweet Potato", calories: 86, macronutrients: { protein: 2, fat: 0.1, carbohydrates: 20 } },
    { name: "Apple", calories: 52, macronutrients: { protein: 0.3, fat: 0.2, carbohydrates: 14 } },
    { name: "Banana", calories: 89, macronutrients: { protein: 1.3, fat: 0.3, carbohydrates: 27 } },
    { name: "Avocado", calories: 160, macronutrients: { protein: 2, fat: 15, carbohydrates: 9 } },
    { name: "Chia Seeds", calories: 486, macronutrients: { protein: 17, fat: 31, carbohydrates: 42 } },
    { name: "Quinoa", calories: 120, macronutrients: { protein: 14, fat: 6, carbohydrates: 64 } },
    { name: "Milk", calories: 42, macronutrients: { protein: 3.4, fat: 3.3, carbohydrates: 5 } },
];

export const mockNoteEntry: string = `This is a test note.

It has multiple lines.

Some lines have just one break.
But this one has two.


Let's see if they all render correctly!`

export const mockNoteEntries: NoteEntry[] = [
    {
        id: 1,
        title: "Morning Thoughts",
        content: `Woke up feeling refreshed today. 

Had a great night's sleep and ready to tackle the day!`
    },
    {
        id: 2,
        title: "Lunch Reflections",
        content: `Tried a new recipe for grilled salmon with brown rice. 

It turned out really well! Will definitely make it again.`
    },
    {
        id: 3,
        title: "Workout Log",
        content: `Did a 30-minute strength training session. 

Felt strong throughout, but I need to work on endurance. 

Maybe increase reps next time?`
    },
    {
        id: 4,
        title: "Evening Wind Down",
        content: `Feeling a bit tired after a long day.

A cup of chamomile tea should help me relax before bed.`
    },
    {
        id: 5,
        title: "Random Thought",
        content: `Why do bananas ripen so fast? 

I swear I bought them yesterday and now they're almost overripe...`
    }
];

const today = new Date();

export const mockFoodEntries: FoodEntry[] = [
    {
        id: 1,
        product: mockProducts[16], // Banana
        quantity: 120,
        time: "2025-02-17T08:11:00Z"
    },
    {
        id: 2,
        product: mockProducts[15], // Apple
        quantity: 182,
        time: "2025-02-17T08:12:30Z"
    },
    {
        id: 3,
        product: mockProducts[17], // Avocado
        quantity: 200,
        time: "2025-02-17T08:19:30Z"
    },
    {
        id: 4,
        product: mockProducts[0], // Chicken Breast
        quantity: 150,
        time: "2025-02-17T12:30:00Z"
    },
    {
        id: 5,
        product: mockProducts[1], // Salmon
        quantity: 154,
        time: "2025-02-17T12:32:00Z"
    },
    {
        id: 6,
        product: mockProducts[5], // Almonds
        quantity: 28,
        time: "2025-02-17T15:37:00Z"
    },
    {
        id: 7,
        product: mockProducts[8], // Brown Rice
        quantity: 200,
        time: "2025-02-17T19:00:00Z"
    },
    {
        id: 8,
        product: mockProducts[2], // Eggs
        quantity: 50,
        time: "2025-02-17T19:02:00Z"
    }
].map(entry => {
    const originalTime = parseISO(entry.time);

    // Set today's date while keeping the original time
    const updatedTime = set(originalTime, {
        year: today.getFullYear(),
        month: today.getMonth(),
        date: today.getDate()
    });

    return { ...entry, time: format(updatedTime, "yyyy-MM-dd'T'HH:mm:ssXXX") };
});


