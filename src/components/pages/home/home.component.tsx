// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { HomeProps } from "./home.types";

export const Home: FunctionComponent<HomeProps> = ({ headerSectionCompositions, passwordSettingsSectionsCompositions }) => {
    return (
        <Fragment>
            {headerSectionCompositions}

            {passwordSettingsSectionsCompositions}
        </Fragment>
    );
};
