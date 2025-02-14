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
  border-radius: 10px;
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

const ButtonBase = styled.button<{ highlighted?: boolean, square?: boolean }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: ${props => props.square ? "10px" : "10px"};
  padding: ${props => props.square ? "8px 12px" : "6px"};
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

const InputBase = styled.input`
  border: none;
  background-color: inherit;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  padding: 5px;
  width:100%;

  ::selection {
    background-color: rgb(215, 215, 215);

  }
  
  &::selection {
    background-color: rgb(215, 215, 215); /* Hide default blue selection */
  }

  // &::-webkit-datetime-edit {
  //   color: inherit;
  // }

  // &::-webkit-datetime-edit-fields-wrapper {
  //   background-color: inherit;
  // }

  // &::-webkit-datetime-edit-text {
  //   background-color: inherit;
  // }

&::-webkit-datetime-edit-month-field:focus,
  &::-webkit-datetime-edit-day-field:focus,
  &::-webkit-datetime-edit-year-field:focus,
  &::-webkit-datetime-edit-hour-field:focus,
  &::-webkit-datetime-edit-minute-field:focus,
  &::-webkit-datetime-edit-second-field:focus,
  &::-webkit-datetime-edit-ampm-field:focus {
    background-color: rgb(215, 215, 215); /* Only active on the selected field */
    color: inherit;
  }
  
`;

interface TypographyProps {
  bold?: boolean;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';  // Predefined sizes
  align?: 'left' | 'center' | 'right';  // Text alignment
  color?: string;  // Color for the text
}

const Typography = styled.div<TypographyProps>`
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  font-size: ${({ size }) => {
    switch (size) {
      case 'xs':
        return '12px';
      case 's':
        return '14px';
      case 'm':
        return '16px';
      case 'l':
        return '18px';
      case 'xl':
        return '24px';
      default:
        return '16px';  // Default size
    }
  }};
  text-align: ${({ align }) => align || 'left'};  // Default to 'left' if not provided
  color: ${({ color }) => color || 'black'};  // Default to 'black' if not provided
`;

const ScrollableBox = styled(FlexBox)`
  height: 300px;  /* Fixed height */
  width: 100%;
  overflow-y: auto; /* Enable scrolling */
  // border-bottom: 1px solid #ccc; /* Optional: for visibility */
  background-color: rgb(245, 245, 245);
  padding: 5px;
  

`;

const SearchItem = styled(FlexBox)`
  background-color: rgb(255, 255, 255);
  
   padding: 8px;
   border-radius: 4px;
   cursor: pointer;
   transition: box-shadow 0.1s ease;
   background-color: rgb(255, 255, 255);

    box-shadow: 0 0 6px rgba(172, 172, 172, 0.1);

   &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
`





export { FlexBox, ButtonBase, Paper, Paper2, InputBase, InputWrapper, Prefix, Typography, ScrollableBox, SearchItem };
