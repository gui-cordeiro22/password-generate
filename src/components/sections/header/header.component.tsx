// Dependencies
import { FunctionComponent } from "react";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>

            <p>{description}</p>
        </div>
    );
};
