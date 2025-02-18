import { FlexBox, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { ReactComponent as CheckCircle } from "../../icons/check_circle.svg";
import { ToastContainer } from "./ToastStyles";

interface Props {
    message: string;
    close: () => void;
    id: number;
}

const Toast = ({ message, close, id }: Props) => {
    return (
        <ToastContainer id={`toast-${id}`} align="center" justify="center" gap="l">
            <CheckCircle />
            <Typography bolder size="s" color="rgb(53, 151, 89)">{message}</Typography>
        </ToastContainer>
    );
};

export default Toast;