// Dependencies
import { FunctionComponent } from "react";

// Styles
import { BarElement, Container } from "./progress-bar.styles";

// Types
import { ProgressBarProps } from "./progress-bar.types";

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ percent }) => {
    return (
        <Container>
            <BarElement percent={percent} />
        </Container>
    );
};
