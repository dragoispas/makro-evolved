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

const ButtonBase = styled.button<{ highlighted?: boolean, circular?: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: ${props => props.circular ? "25px" : "12px"};
  padding: ${props => props.circular ? "6px 16px" : "6px"};
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.1s ease; 

  &:hover {
    ${({ highlighted }) => !highlighted && "background-color: rgb(245, 245, 245); color: black;"}
  }

  ${({ highlighted }) =>
    highlighted &&
    `
    background-color: black; 
    color: white;
    padding: 8px;
  `}

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ highlighted }) => (highlighted ? "white" : "black")};
    stroke: ${({ highlighted }) => (highlighted ? "white" : "black")};
    transition: fill 0.1s ease, stroke 0.1s ease;
  }
`;

const InputWrapper = styled.div<{ large?: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 8px; 
  background-color: rgb(245, 245, 245);
  padding: 5px;
  font-size: 16px;
  padding: 5px;
  border-bottom: 2px solid rgb(109, 109, 109);
  &:hover {
    border-bottom: 2px solid black;
  }

  &:focus {
    border-bottom: 2px solid black;
  }
`;

const Prefix = styled.div`
  // font-size: 16px;
  // font-weight: 500;
  // color: rgb(109, 109, 109);
`;

const InputBase = styled.input`
  border: none;
  background-color: inherit;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  
  
`;





export { FlexBox, ButtonBase, Paper, Paper2, InputBase, InputWrapper, Prefix };
