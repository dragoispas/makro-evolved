import { useRef, useState } from "react";
import { FlexBox, InputBase, InputWrapper, Prefix } from "../styledComponents"

interface Props {
    prefix?: string
    type?: React.HTMLInputTypeAttribute
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ prefix, type, Icon }: Props) => {
    const [focus, setFocus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <InputWrapper
            focus={focus} onClick={() => inputRef.current?.focus()}
        >
            {prefix && <Prefix focus={focus}>{prefix}</Prefix>}
            <FlexBox gap="xs" width="100%">
                {Icon && <Icon />}
                <InputBase
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    type={type}
                    ref={inputRef}
                />
            </FlexBox>
        </InputWrapper>
    );
};

export default Input;