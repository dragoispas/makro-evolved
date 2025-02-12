import { InputBase, InputWrapper, Prefix } from "../styledComponents"

interface Props {
    prefix?: string
    type?: React.HTMLInputTypeAttribute
}

const Input = ({ prefix, type }: Props) => {
    return (
        <InputWrapper>
            {prefix && <Prefix>{prefix}</Prefix>}
            <InputBase type={type} />
        </InputWrapper>
    );
};

export default Input;