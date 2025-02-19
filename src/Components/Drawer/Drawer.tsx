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
import { useFoodEntriesStore, useNoteEntriesStore, useDiaryDrawerStore } from "../../store";

interface Props {
  isOpen: boolean;
  close: () => void;
  content: string | null;
}

const Drawer = (
  { isOpen,
    close,
    content,
  }: Props) => {

  const renderDrawerContent = useCallback(() => {
    if (content === "LogFood") {
      return (
        <LogFood />
      )
    }

    if (content === "LogWeight") {
      return (
        <LogWeight />
      )
    }

    if (content === "Note") {
      return (
        <AddNote />
      )
    }

    if (content === "EditFood") {
      return (
        <EditFoodEntry />
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
