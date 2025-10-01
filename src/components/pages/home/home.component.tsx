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
            {headerSectionCompositions}
            {passwordVisualizerCompositions}
            {customPasswordOptionsCompositions}
            {copyPasswordButtonCompositions}
        </Fragment>
    );
};
