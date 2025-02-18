import { FlexBox, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

interface Props {
    message: string;
    close: () => void;
}

const Toast = ({ message, close }: Props) => {
    return (
        <FlexBox>
            <Typography>
                {message}
            </Typography>
            <Button Icon={CloseIcon} onClick={close} />
        </FlexBox>
    )
}

export default Toast;