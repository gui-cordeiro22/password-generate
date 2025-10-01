// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, Description, Title } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ title, description }) => {
    return (
        <Container>
            <Title>{title}</Title>

            <Description>{description}</Description>
        </Container>
    );
};
