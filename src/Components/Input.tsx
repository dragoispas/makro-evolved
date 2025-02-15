import { useRef, useState } from "react";
import { FlexBox, InputBase } from "../styledComponents"
import styled from "styled-components";

const InputWrapper = styled.div<{ focus?: boolean }>`
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  gap: 12px; 
  width:100%;
  
  background-color: rgb(245, 245, 245);
  // padding: 5px;
  border-bottom: 1px solid rgb(109, 109, 109);
  transition: border-bottom 0.1s ease;
  cursor: text;

  &:hover {
    border-bottom: 1px solid black;
    }

  ${({ focus }) => (focus && `border-bottom: 1px solid black;`)}

  svg {
    width: 26px;
    height: 26px;
    fill: grey;
    stroke: black;
    transition: fill 0.1s ease, stroke 0.1s ease;
    padding: 5px;
  }
`;


const Prefix = styled.div<{ focus?: boolean }>`
user-select: none;
  font-size: 14px;
  font-weight: 400;
  transform: translate(5px, 5px);
  color: ${({ focus }) => (focus ? `black` : `rgb(73, 73, 73);`)};
  height:14px;
`;

interface Props {
    prefix?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ prefix, placeholder, type, Icon }: Props) => {
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
                    placeholder={placeholder}
                />
            </FlexBox>
        </InputWrapper>
    );
};

export default Input;