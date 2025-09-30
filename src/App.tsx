// Dependencies
import { Fragment, FunctionComponent } from "react";

// Pages
import HomePage from "./pages/home-page";

// Styles
import { GlobalStyle } from "./styles/global";

export const App: FunctionComponent = () => {
    return (
        <Fragment>
            <GlobalStyle />

            <HomePage />
        </Fragment>
    );
};
