import styled from "styled-components";
import { FlexBox, Paper, Interactable, Typography, PaperHeader } from "../styledComponents"
import { differenceInMinutes, format, isSameHour } from "date-fns"

const FoodDiaryContainer = styled(Paper)`
    flex-direction: column;
    margin-top: 14px;
    min-width: 300px;
`

const testItems = [
    {
        name: "Banana",
        weight: 120, // grams
        calories: 105,
        protein: 1.3, // g
        carbohydrates: 27, // g
        fat: 0.3, // g
        time: "2025-02-11T08:11:00Z"
    },
    {
        name: "Apple",
        weight: 182,
        calories: 95,
        protein: 0.5,
        carbohydrates: 25,
        fat: 0.3,
        time: "2025-02-11T08:12:30Z" // 1 min 30 sec later
    },
    {
        name: "Orange",
        weight: 130,
        calories: 62,
        protein: 1.2,
        carbohydrates: 15.4,
        fat: 0.2,
        time: "2025-02-11T08:14:00Z" // 1 min 30 sec later
    },
    {
        name: "Strawberry",
        weight: 150,
        calories: 48,
        protein: 1,
        carbohydrates: 11.7,
        fat: 0.5,
        time: "2025-02-11T08:16:00Z" // 7 min later
    },
    {
        name: "Avocado",
        weight: 200,
        calories: 322,
        protein: 4,
        carbohydrates: 17,
        fat: 29,
        time: "2025-02-11T08:19:30Z" // 1 min 30 sec later
    },
    {
        name: "Chicken Breast",
        weight: 150,
        calories: 165,
        protein: 31,
        carbohydrates: 0,
        fat: 3.6,
        time: "2025-02-11T12:30:00Z" // A big gap, simulating lunch
    },
    {
        name: "Salmon",
        weight: 154,
        calories: 280,
        protein: 22,
        carbohydrates: 0,
        fat: 20,
        time: "2025-02-11T12:32:00Z" // 2 min later
    },
    {
        name: "Almonds",
        weight: 28, // ~1 ounce
        calories: 164,
        protein: 6,
        carbohydrates: 6,
        fat: 14,
        time: "2025-02-11T15:37:00Z" // Afternoon snack
    },
    {
        name: "Rice (Cooked)",
        weight: 200,
        calories: 260,
        protein: 5,
        carbohydrates: 57,
        fat: 0.5,
        time: "2025-02-11T19:00:00Z" // Dinner
    },
    {
        name: "Egg",
        weight: 50, // large egg
        calories: 70,
        protein: 6,
        carbohydrates: 1,
        fat: 5,
        time: "2025-02-11T19:02:00Z" // 2 min later, also part of dinner
    }
];


const FoodDiary = () => {
    if (!testItems.length) return null;

    let groupedItems: JSX.Element[] = [];
    let lastTime: Date | null = null;

    testItems.forEach((item, index) => {
        const itemTime = new Date(item.time);
        console.log(itemTime)

        if (lastTime && differenceInMinutes(itemTime, lastTime) > 30) {
            groupedItems.push(
                <div></div>
            )
        }

        if (!lastTime || differenceInMinutes(itemTime, lastTime) > 30) {
            lastTime = itemTime;
            groupedItems.push(
                <PaperHeader key={`time-${index}`} >
                    {format(itemTime, "HH:mm")}
                </PaperHeader>
            );
        }

        const getMakros = () => {
            return ` (${item.protein} protein, ${item.fat} fat, ${item.carbohydrates} carbohydrates, ${item.calories} calories)`
        }

        groupedItems.push(
            <Interactable key={`item-${index}`}>
                <FlexBox justify="space-between">
                    <Typography bolder size="s">{item.name}</Typography>
                    <FlexBox gap="s">
                        <Typography color="grey" size="s">{getMakros()}</Typography>
                        <Typography bolder size="s">{item.weight} g</Typography>
                    </FlexBox>
                </FlexBox>
            </Interactable>
        );
    });

    return (
        <FoodDiaryContainer gap="l">
            {groupedItems}
        </FoodDiaryContainer>
    );
};

export default FoodDiary;




