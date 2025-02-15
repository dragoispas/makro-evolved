import { Product } from "./types";

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

export const mockNote: string = `This is a test note.

It has multiple lines.

Some lines have just one break.
But this one has two.


Let's see if they all render correctly!`
