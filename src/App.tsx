// Dependencies
import { Fragment, FunctionComponent } from "react";
import { ToastContainer } from "react-toastify";

// Pages
import HomePage from "./pages/home-page";

// Styles
import { GlobalStyle } from "./styles/global";

export const App: FunctionComponent = () => {
    return (
        <Fragment>
            <GlobalStyle />

            <ToastContainer theme="light" position="bottom-right" limit={1} />

            <HomePage />
        </Fragment>
    );
};
