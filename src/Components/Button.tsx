import React from "react";
import { FlexBox, ButtonBase } from "../styledComponents";

interface ButtonProps {
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    children?: React.ReactNode;
    onMouseOver?: () => void;
    selected?: boolean;
    circular?: boolean;
    style?: React.CSSProperties; // Accepts inline styles
}

const Button: React.FC<ButtonProps> = ({ Icon, onClick, children, onMouseOver, selected, circular, style }) => {
    return (
        <ButtonBase circular={circular} onMouseOver={onMouseOver} onClick={onClick} style={style} highlighted={selected}>
            <FlexBox align="center" justify="center">
                {Icon && <Icon />}
                {children && <FlexBox align="center">{children}</FlexBox>}
            </FlexBox>
        </ButtonBase>
    );
};

export default Button;
