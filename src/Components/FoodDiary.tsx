import styled from "styled-components";
import { FlexBox, Paper, Interactable, Typography, PaperHeader } from "../styledComponents"
import { differenceInMinutes, format, isSameHour, parseISO, startOfDay } from "date-fns"
import { FoodEntry } from "../types";
import { useCallback, useEffect, useMemo } from "react";

const FoodDiaryContainer = styled(Paper)`
    flex-direction: column;
    margin-top: 14px;
    min-width: 300px;
`

interface Props {
    foodEntries: FoodEntry[];
    onClickFoodEntry: (foodEntry: FoodEntry) => void;
}

const FoodDiary = ({ foodEntries, onClickFoodEntry }: Props) => {

    const getGroupedItems = useCallback(() => {

        let groupedItems: JSX.Element[] = [];
        let lastTime: Date = startOfDay(new Date());

        const sortedEntries = [...foodEntries].map(entry => ({
            ...entry,
            parsedTime: parseISO(entry.time).getTime()
        })).sort((a, b) => a.parsedTime - b.parsedTime)

        sortedEntries.forEach((item, index) => {
            const itemTime = new Date(item.time);

            if (lastTime && differenceInMinutes(itemTime, lastTime) > 30) {
                groupedItems.push(
                    <div></div>
                )
            }
            if (differenceInMinutes(itemTime, lastTime) > 30) {
                const timeHeader = format(itemTime, "HH:mm")


                groupedItems.push(
                    <PaperHeader key={`time-${index}`} >
                        {timeHeader}
                    </PaperHeader>
                );

                lastTime = itemTime;
            }


            const getMakros = () => {
                return `(${(item.product.macronutrients.protein * item.quantity / 100).toFixed(1)} protein, ${(item.product.macronutrients.fat * item.quantity / 100).toFixed(1)} fat, ${(item.product.macronutrients.carbohydrates * item.quantity / 100).toFixed(1)} carbohydrates, ${(item.product.calories * item.quantity / 100).toFixed(1)} calories)`
            }

            groupedItems.push(
                <Interactable onClick={() => onClickFoodEntry(item)} key={`item-${item.id}`}>
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
        return groupedItems;
    }, [foodEntries])

    return (
        <FoodDiaryContainer gap="l">
            {getGroupedItems()}
        </FoodDiaryContainer>
    );
};

export default FoodDiary;




