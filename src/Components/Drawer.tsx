import { FlexBox } from '../styledComponents';
import Button from "./Button";
import { ReactComponent as CloseIcon } from '../icons/close.svg';

interface Props {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

const Drawer = ({ isOpen, setOpen, children }: Props) => {
    return (
        <>
            {/* Background Overlay */}
            <div
                onClick={() => setOpen(false)}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0, 0, 0, 0.15)",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? "visible" : "hidden",
                    zIndex: 999,
                }}
            />

            {/* Drawer Content */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "450px",
                    height: "100vh",
                    padding: "10px",
                    borderLeft: "1px solid lightgrey",
                    background: "white",
                    boxShadow: "0 0 15px rgba(0, 0, 0, 0.15)",
                    transform: isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s ease-in-out",
                    zIndex: 1000,
                }}
                onClick={(e) => e.stopPropagation()} // Prevent click inside from closing it
            >
                <Button Icon={CloseIcon} onClick={() => setOpen(false)} style={{ alignSelf: "flex-end" }} />
                <FlexBox style={{ padding: "10px 10px 30px 10px", height: "100%" }}>{children}</FlexBox>
            </div>
        </>
    );
};

export default Drawer;
