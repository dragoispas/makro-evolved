import styled from "styled-components";
import { FlexBox, Typography } from "../../styledComponents";
import Button from "../Button";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { Overlay, DrawerContainer, ContentWrapper } from "./DrawerStyles";
import { useCallback, useState } from "react";
import LogFood from "./LogFood";
import AddNote from "./AddNote";
import EditFoodEntry from "./EditFoodEntry";
import LogWeight from "./LogWeight";
import { FoodEntry, NoteEntry, Product } from "../../types";

interface Props {
  isOpen: boolean;
  close: () => void;
  content: string | null;

  foodEntries: FoodEntry[];
  noteEntries: NoteEntry[];
  selectedFoodEntry: FoodEntry | null;
  selectedNoteEntry: NoteEntry;
  selectedProduct: Product | null;
}

const Drawer = (
  { isOpen,
    close,
    content,
    foodEntries,
    noteEntries,
    selectedFoodEntry,
    selectedNoteEntry,
    selectedProduct,
  }: Props) => {
  const renderDrawerContent = useCallback(() => {
    if (content === "LogFood") {
      return (
        <LogFood foodEntries={foodEntries} selectedProduct={selectedProduct} />
      )
    }

    if (content === "LogWeight") {
      return (
        <LogWeight />
      )
    }

    if (content === "Note") {
      return (
        <AddNote noteEntries={noteEntries} noteEntry={selectedNoteEntry} />
      )
    }

    if (content === "EditFood") {
      return (
        <EditFoodEntry foodEntries={foodEntries} foodEntry={selectedFoodEntry} />
      )
    }

    return (
      <FlexBox column align="center" gap="l" width="100%" height="100%">
        <Typography bolder style={{ marginBottom: "20px" }}>Empty</Typography>
      </FlexBox>
    )
  }, [content])
  return (
    <>
      <Overlay isOpen={isOpen} onClick={close} />
      <DrawerContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Button Icon={CloseIcon} onClick={close} style={{ alignSelf: "flex-end" }} />
        <ContentWrapper>{renderDrawerContent()}</ContentWrapper>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
