import { FlexBox, Paper, Paper2 } from "../styledComponents";

interface Props {
    title?: string;
    children?: React.ReactNode
}

const Note: React.FC<Props> = ({ title, children }) => {
    return (
        <Paper column gap="l" style={{ marginTop: "14px" }}>
            <div style={{ fontWeight: "bold", color: "grey" }}>
                {title ?? "Note"}
            </div>

            <Paper2> {children}</Paper2>
        </Paper>
    )
}

export default Note;