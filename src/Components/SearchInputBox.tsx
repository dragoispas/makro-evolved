import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import Input from "./Input";
import { Product } from "../types";
import { mockProducts } from "../mockData";

const StyledSearchBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  transition: box-shadow 0.3s ease-in-out;
  padding-bottom: 20px;
`;

const ListContainer = styled.div<{ expanded?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: height 0.1s ease;
  height: ${({ expanded }) => expanded ? `675px` : `450px`};
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
  selected: string;
  setSelected: (option: string) => void;
}

const SelectableButtons = ({ options, selected, setSelected }: ButtonsProps) => {

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

interface SearchInputBoxProps {
  onSetSelectedProduct: (product: Product) => void;
  expanded?: boolean;
}
const SearchInputBox = ({ onSetSelectedProduct, expanded }: SearchInputBoxProps) => {
  const [category, setCategory] = useState<string>("All")
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredProducts = mockProducts.map((item, index) => {
    if (item.name.includes(searchInput)) {
      return <ListItem onClick={() => onSetSelectedProduct(item)} key={index}>{item.name}</ListItem>
    }
  })

  return (
    <StyledSearchBox>
      <Input value={searchInput} onChange={e => setSearchInput(e.target.value)} Icon={SearchIcon} />
      <SelectableButtons selected={category} setSelected={setCategory} options={["All", "Common", "Custom", "Favorites"]} />
      <ListContainer expanded={expanded}>
        {filteredProducts}
      </ListContainer>
    </StyledSearchBox>
  );
};

export default SearchInputBox;
