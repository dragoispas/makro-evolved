import { FlexBox, Paper, Interactable, PaperHeader, Typography } from "../styledComponents";

interface Props {
    title?: string;
    children?: React.ReactNode
}

const Note: React.FC<Props> = ({ title, children }) => {
    return (
        <Paper column gap="l" style={{ marginTop: "14px" }}>
            <PaperHeader>
                {title ?? "Note"}
            </PaperHeader>

            <Interactable>
                <Typography bolder>
                    {children}
                </Typography>
            </Interactable>
        </Paper>
    )
}

export default Note;