// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomeProps } from "./home.types";

export const Home: FunctionComponent<HomeProps> = ({
    headerSectionCompositions,
    passwordVisualizerCompositions,
    customPasswordOptionsCompositions,
    copyPasswordButtonCompositions,
}) => {
    return (
        <Fragment>
            <h1>Password Generator</h1>
            {headerSectionCompositions}
            {passwordVisualizerCompositions}
            {customPasswordOptionsCompositions}
            {copyPasswordButtonCompositions}
        </Fragment>
    );
};
