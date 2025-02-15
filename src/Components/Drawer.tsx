import styled from "styled-components";
import { FlexBox } from "../styledComponents";
import Button from "./Button";
import { ReactComponent as CloseIcon } from "../icons/close.svg";

interface Props {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  z-index: 999;
`;

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 450px;
  height: 100vh;
  padding: 10px;
  border-left: 1px solid lightgrey;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Content = styled(FlexBox)`
  padding: 10px 10px 30px 10px;
  height: 100%;
`;

const Drawer = ({ isOpen, setOpen, children }: Props) => {
    return (
        <>
            <Overlay isOpen={isOpen} onClick={() => setOpen(false)} />
            <DrawerContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <Button Icon={CloseIcon} onClick={() => setOpen(false)} style={{ alignSelf: "flex-end" }} />
                <Content>{children}</Content>
            </DrawerContainer>
        </>
    );
};

export default Drawer;
