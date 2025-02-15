export type Product = {
    name: string,
    calories: number,
    macronutrients: Makros,
}

export type Makros = {
    protein: number,
    fat: number,
    carbohydrates: number
}