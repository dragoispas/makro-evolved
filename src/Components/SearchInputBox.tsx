import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import Input from "./Input";

const testData = Array(30).fill("Test Item");

const StyledSearchBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  transition: box-shadow 0.3s ease-in-out;
  padding-bottom: 20px;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 450px;
  overflow-y: auto;
  border: 1px solid lightgrey;
  border-radius: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: inherit;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(181, 181, 181);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(156, 156, 156);
  }

`;

const ListItem = styled.button`
  width: 100%;
  border: none;
  background: inherit;
  cursor: pointer;
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  transition: background 0.1s ease;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.selected ? "rgb(235, 235, 235)" : "white")};
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "rgb(235, 235, 235)" : "rgb(245, 245, 245)")};
  }
`;

interface ButtonsProps {
  options: string[];
}

const SelectableButtons = ({ options }: ButtonsProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ButtonGroup>
      {options.map((option) => (
        <Button key={option} selected={selected === option} onClick={() => setSelected(option)}>
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

const SearchInputBox = () => {

  return (
    <StyledSearchBox>
      <Input Icon={SearchIcon} />
      <SelectableButtons options={["All", "Common", "Custom", "Favorites"]} />
      <ListContainer>
        {testData.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </ListContainer>
    </StyledSearchBox>
  );
};

export default SearchInputBox;
