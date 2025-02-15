import { FlexBox, Typography } from "../styledComponents";
import Button from "./Button";
import Input from "./Input";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { Product } from "../types";
import { useRef, useState } from "react";

interface Props {
    product: Product;
    discardProduct: () => void;
}

const FoodForm = ({ product, discardProduct }: Props) => {
    const [quantity, setQuantity] = useState<number>(0);


    return (
        <FlexBox column width="95%" gap="xl" >
            <FlexBox column>
                <Typography bolder>{product.name}</Typography>
                <Typography size="s" color="grey">{quantity ? `(${(product.macronutrients.protein * quantity / 100).toFixed(1)} protein, ${(product.macronutrients.fat * quantity / 100).toFixed(1)} fat, ${(product.macronutrients.carbohydrates * quantity / 100).toFixed(1)} carbohydrates, ${(product.calories * quantity / 100).toFixed(1)} calories)` : '(0 protein, 0 fat, 0 carbohydrates, 0 calories)'}</Typography>
            </FlexBox>
            <FlexBox gap="m">
                <Input value={quantity?.toString()} onChange={(e) => setQuantity(parseFloat(e.target.value))} prefix="Quantity (g)" type="number" />
                <Input type="time" prefix="Timestamp" />
            </FlexBox>
            <FlexBox column>
                <Button Icon={CheckIcon}>Add to Diary</Button>
                <Button Icon={DeleteIcon} onClick={discardProduct}>Discard</Button>
            </FlexBox>
        </FlexBox>
    )
}

export default FoodForm;