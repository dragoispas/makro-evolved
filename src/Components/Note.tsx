import { Paper, Interactable, PaperHeader, Typography } from "../styledComponents";

interface Props {
    title?: string;
    text: string;
    onClick?: () => void;
}

const Note: React.FC<Props> = ({ title, text, onClick }) => {

    return (
        <Paper onClick={onClick} column gap="l" style={{ marginTop: "14px" }}>
            <PaperHeader>
                {title ?? "Note"}
            </PaperHeader>

            <Interactable>
                <Typography style={{ whiteSpace: "pre-wrap" }} bolder size="s" >
                    {text}
                </Typography>
            </Interactable>
        </Paper>
    )
}

export default Note;