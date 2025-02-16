import styled from "styled-components";
import { FlexBox, Paper, Interactable, Typography, PaperHeader } from "../styledComponents"
import { differenceInMinutes, format, isSameHour } from "date-fns"
import { FoodEntry } from "../types";

const FoodDiaryContainer = styled(Paper)`
    flex-direction: column;
    margin-top: 14px;
    min-width: 300px;
`

interface Props {
    foodEntries: FoodEntry[]
}

const FoodDiary = ({ foodEntries }: Props) => {
    if (!foodEntries.length) return null;

    let groupedItems: JSX.Element[] = [];
    let lastTime: Date | null = null;

    foodEntries.forEach((item, index) => {
        const itemTime = new Date(item.time);

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
            return `(${(item.product.macronutrients.protein * item.quantity / 100).toFixed(1)} protein, ${(item.product.macronutrients.fat * item.quantity / 100).toFixed(1)} fat, ${(item.product.macronutrients.carbohydrates * item.quantity / 100).toFixed(1)} carbohydrates, ${(item.product.calories * item.quantity / 100).toFixed(1)} calories)`
        }

        groupedItems.push(
            <Interactable key={`item-${item.id}`}>
                <FlexBox justify="space-between">
                    <Typography bolder size="s">{item.product.name}</Typography>
                    <FlexBox gap="s">
                        <Typography color="grey" size="s">{getMakros()}</Typography>
                        <Typography bolder size="s">{item.quantity} g</Typography>
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




