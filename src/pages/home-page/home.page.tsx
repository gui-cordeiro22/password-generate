// Dependencies
import { FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            headerSectionCompositions={<div>Header Section</div>}
            passwordVisualizerCompositions={<div>Password Visualizer</div>}
            customPasswordOptionsCompositions={<div>Custom Password Options</div>}
            copyPasswordButtonCompositions={<div>Copy Password Button</div>}
        />
    );
};
