import { FlexBox, TextArea, Typography } from "../../styledComponents"
import Button from "../Button"
import Input from "../Input"
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { FoodEntry } from "../../types";
import { useEffect, useState } from "react";
import useFoodEntryForm from "./useFoodEntryForm";
import { format, parseISO } from "date-fns";

interface Props {
    foodEntry: FoodEntry | null;
    foodEntries: FoodEntry[];
    setFoodEntries: (foodEntries: FoodEntry[]) => void;
    closeDrawer: () => void;
}

const EditFoodEntry = ({ foodEntries, foodEntry, setFoodEntries, closeDrawer }: Props) => {
    const [currentFoodEntry, setCurrentFoodEntry] = useState<FoodEntry | null>(foodEntry)
    const { quantity, setQuantity, timestamp, setTimestamp, handleTimeChange } = useFoodEntryForm();

    useEffect(() => {
        if (foodEntry) {
            setCurrentFoodEntry(foodEntry);
            setQuantity(foodEntry.quantity)
            setTimestamp(foodEntry.time)
        }
    }, [foodEntry])

    if (!foodEntry || !currentFoodEntry) return null;

    const onSaveFoodEntry = () => {
        const updatedFoodEntries = foodEntries.map(foodEntry => currentFoodEntry.id === foodEntry.id ? { ...foodEntry, quantity: quantity || 0, time: timestamp } : foodEntry)
        setFoodEntries(updatedFoodEntries);

    }

    const onDeleteFoodEntry = () => {
        const updatedFoodEntries = foodEntries.filter(foodEntry => foodEntry.id !== currentFoodEntry.id)
        setFoodEntries(updatedFoodEntries);
        closeDrawer();
    }
    return (
        <FlexBox column align="center" gap="l" width="100%" height="100%">
            <Typography bolder style={{ marginBottom: "20px" }}>Edit Food Entry</Typography>
            <FlexBox column width="100%">
                <Typography bolder>{currentFoodEntry.product.name}</Typography>
                <Typography size="s" color="grey">{quantity ? `(${(currentFoodEntry.product.macronutrients.protein * quantity / 100).toFixed(1)} protein, ${(currentFoodEntry.product.macronutrients.fat * quantity / 100).toFixed(1)} fat, ${(currentFoodEntry.product.macronutrients.carbohydrates * quantity / 100).toFixed(1)} carbohydrates, ${(currentFoodEntry.product.calories * quantity / 100).toFixed(1)} calories)` : '(0 protein, 0 fat, 0 carbohydrates, 0 calories)'}</Typography>
            </FlexBox>
            <FlexBox gap="m" width="100%">
                <Input value={quantity?.toString()} onChange={(e) => setQuantity(parseFloat(e.target.value))} prefix="Quantity (g)" type="number" />
                <Input value={format(parseISO(timestamp), "HH:mm")} onChange={handleTimeChange} type="time" prefix="Timestamp" />
            </FlexBox>
            <FlexBox column width="100%">
                <Button onClick={onSaveFoodEntry} style={{ width: "100%" }} Icon={CheckIcon}>{currentFoodEntry.id > 0 ? `Save Changes` : `Add this Note`}</Button>
                <Button onClick={onDeleteFoodEntry} style={{ width: "100%" }} Icon={DeleteIcon}>Delete this Note</Button>
            </FlexBox>
        </FlexBox>

    )
}

export default EditFoodEntry;