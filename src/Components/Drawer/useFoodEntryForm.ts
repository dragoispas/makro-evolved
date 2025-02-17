import { useState } from "react";
import { format, set } from "date-fns";


const useFoodEntryForm = () => {
    const [quantity, setQuantity] = useState<number>();
    const [timestamp, setTimestamp] = useState<string>(format(new Date(), "yyyy-MM-dd'T'HH:mm:ssX"));


    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedTime = e.target.value; // "HH:mm"
        if (!selectedTime) return;

        const currentDate = new Date();
        const [hours, minutes] = selectedTime.split(':').map(Number);

        // Set new time while keeping the date unchanged
        const updatedDate = set(currentDate, { hours, minutes, seconds: 0 });

        // Store as "YYYY-MM-DDTHH:mm:ssZ"
        setTimestamp(format(updatedDate, "yyyy-MM-dd'T'HH:mm:ssX"));
    };


    return { quantity, setQuantity, timestamp, setTimestamp, handleTimeChange }
}

export default useFoodEntryForm;