type AlignOptions = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
type JustifyOptions = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type GapOptions = "xs" | "s" | "m" | "l" | "xl" | "xxl";

const gapSizes = {
    xs: "4px",
    s: "8px",
    m: "12px",
    l: "16px",
    xl: "24px",
    xxl: "32px",
};

interface Props {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    column?: boolean;
    align?: AlignOptions;
    justify?: JustifyOptions;
    gap?: GapOptions;
    width?: string;
    height?: string;
}
const FlexBox: React.FC<Props> = ({ children, style, column, align, justify, gap, width, height }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: column ? "column" : "row",
            alignItems: align || "stretch",
            justifyContent: justify || "flex-start",
            gap: gap ? gapSizes[gap] : "0px",
            width: width || "",
            height: height || "",
            ...style
        }}>
            {children}
        </div>
    );
}

export default FlexBox;