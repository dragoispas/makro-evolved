import { FlexBox, Typography } from "../../styledComponents";
import Button from "../Button";
import Input from "../Input";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import { FoodEntry, Product } from "../../types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { format, formatISO, parseISO, set } from "date-fns";
import useFoodEntryForm from "./useFoodEntryForm";
import { useToast } from "../Toast/ToastContext";
import { useDrawer } from "./DrawerContext";
import { useFoodEntriesStore, useDiaryDrawerStore } from "../../store";

const FormContainer = styled(FlexBox) <{ enabled?: boolean }>`
  transition: opacity 0.1s ease, visibility 0.1s ease; /* Delay hiding */

  ${({ enabled }) =>
        enabled
            ? `
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: none;
      `
            : `
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      `}
`;



interface Props {
    product: Product | null;
    foodEntries: FoodEntry[];
}

const FoodForm = ({ product, foodEntries }: Props) => {
    const toast = useToast();
    const drawer = useDrawer();

    const { addFoodEntry } = useFoodEntriesStore();
    const { setSelectedProduct } = useDiaryDrawerStore();
    const { quantity, setQuantity, timestamp, handleTimeChange } = useFoodEntryForm();

    const discard = () => {
        setQuantity(parseFloat(""));
        setSelectedProduct(null);
    }

    const onAddToDiary = () => {
        if (product && quantity) {
            const newFoodEntry: FoodEntry = { id: foodEntries.length + 1, product: product, quantity: quantity, time: timestamp }
            addFoodEntry(newFoodEntry)
        }
        setSelectedProduct(null);
        toast?.success();
    }

    return (
        <>
            <FormContainer enabled={!!product} column width="95%" gap="xl" >
                <FlexBox column>
                    <Typography bolder>{product ? product.name : "No product"}</Typography>
                    <Typography size="s" color="grey">{quantity && product ? `(${(product.macronutrients.protein * quantity / 100).toFixed(1)} protein, ${(product.macronutrients.fat * quantity / 100).toFixed(1)} fat, ${(product.macronutrients.carbohydrates * quantity / 100).toFixed(1)} carbohydrates, ${(product.calories * quantity / 100).toFixed(1)} calories)` : '(0 protein, 0 fat, 0 carbohydrates, 0 calories)'}</Typography>
                </FlexBox>
                <FlexBox gap="m">
                    <Input disabled={!product} value={quantity?.toString()} onChange={(e) => setQuantity(parseFloat(e.target.value))} prefix="Quantity (g)" type="number" />
                    <Input disabled={!product} value={format(parseISO(timestamp), "HH:mm")} onChange={handleTimeChange} type="time" prefix="Timestamp" />
                </FlexBox>
                <FlexBox column>
                    <Button disabled={!product} Icon={CheckIcon} onClick={onAddToDiary}>Add to Diary</Button>
                    <Button disabled={!product} Icon={DeleteIcon} onClick={discard}>Discard</Button>
                </FlexBox>
            </FormContainer>
        </>
    )
}

export default FoodForm;