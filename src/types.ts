export type Product = {
    name: string,
    calories: number,
    macronutrients: Makros,
}

export type Makros = {
    protein: number,
    fat: number,
    carbohydrates: number,
}

export type FoodEntry = {
    id: number,
    product: Product,
    quantity: number,
    time: string,
}

export type NoteEntry = {
    id: number,
    title?: string,
    content: string,
}