import { FlexBox, TextArea, Typography } from "../../styledComponents"
import Button from "../Button"
import Input from "../Input"
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import { FoodEntry } from "../../types";
import { useEffect, useState } from "react";
import useFoodEntryForm from "./useFoodEntryForm";
import { format, parseISO } from "date-fns";
import { useToast } from "../Toast/ToastContext";
import { useDrawer } from "./DrawerContext";
import { useFoodEntriesStore, useDiaryDrawerStore } from "../../store";

const EditFoodEntry = () => {
    const toast = useToast();
    const drawer = useDrawer();
    const { selectedFoodEntry } = useDiaryDrawerStore();
    const { deleteFoodEntry, updateFoodEntry } = useFoodEntriesStore();

    const [currentFoodEntry, setCurrentFoodEntry] = useState<FoodEntry | null>(selectedFoodEntry)
    const { quantity, setQuantity, timestamp, setTimestamp, handleTimeChange } = useFoodEntryForm();

    useEffect(() => {
        // console.log(foodEntry)
        if (selectedFoodEntry) {
            setCurrentFoodEntry(selectedFoodEntry);
            setQuantity(selectedFoodEntry.quantity)
            setTimestamp(selectedFoodEntry.time)
        }
    }, [selectedFoodEntry])

    if (!selectedFoodEntry || !currentFoodEntry) return null;

    const onSaveFoodEntry = () => {
        updateFoodEntry(currentFoodEntry.id, { quantity: quantity || 0, time: timestamp });
        drawer.close();
        toast?.success();
    }

    const onDeleteFoodEntry = () => {
        deleteFoodEntry(currentFoodEntry.id)
        drawer.close();
        toast?.success();
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
                <Button onClick={onDeleteFoodEntry} style={{ width: "100%" }} Icon={DeleteIcon}>Delete from Diary</Button>
            </FlexBox>
        </FlexBox>

    )
}

export default EditFoodEntry;