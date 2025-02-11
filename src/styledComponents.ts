import styled from "styled-components";

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

const FlexBox = styled.div<{
  column?: boolean;
  align?: AlignOptions;
  justify?: JustifyOptions;
  gap?: GapOptions;
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => (props.gap ? gapSizes[props.gap] : "0px")};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
`;

const Paper = styled(FlexBox)`
  border-radius: 16px;
  background-color:rgb(245, 245, 245); 
  padding: 20px;
`

const Paper2 = styled(FlexBox)`
  border-radius: 16px;
  background-color:white; 
  padding: 20px;
  transition: box-shadow 0.2s ease; 
  font-weight: 500;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 23px rgba(0, 0, 0, 0.15);
  }
`

const ButtonBase = styled.button<{ selected?: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 16px;
  padding: 6px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.1s ease; 

  &:hover {
    ${({ selected }) => !selected && "background-color: rgb(245, 245, 245); color: black;"}
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: black; 
    color: white;
    pointer-events: none;
    padding: 8px;
  `}

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ selected }) => (selected ? "white" : "black")};
    stroke: ${({ selected }) => (selected ? "white" : "black")};
    transition: fill 0.1s ease, stroke 0.1s ease;
  }
`;




export { FlexBox, ButtonBase, Paper, Paper2 };
