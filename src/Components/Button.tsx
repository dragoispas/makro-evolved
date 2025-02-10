import React from "react";
import { FlexBox, ButtonBase } from "../styledComponents";

interface ButtonProps {
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    children?: React.ReactNode;
    onMouseOver?: () => void;
    selected?: boolean;
    style?: React.CSSProperties; // Accepts inline styles
}

const Button: React.FC<ButtonProps> = ({ Icon, onClick, children, onMouseOver, selected, style }) => {
    return (
        <ButtonBase onMouseOver={onMouseOver} onClick={onClick} style={style} selected={selected}>
            <FlexBox align="center" justify="center">
                {Icon && <Icon />}
                {children && <FlexBox align="center">{children}</FlexBox>}
            </FlexBox>
        </ButtonBase>
    );
};

export default Button;
