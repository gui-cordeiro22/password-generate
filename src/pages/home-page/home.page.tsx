// Dependencies
import { Fragment, FunctionComponent } from "react";

// Components
import { Home } from "../../components/pages/home";
import { Header } from "../../components/sections/header";
import { InputRange, InputText } from "../../components/elements/input";
import { Button } from "../../components/elements/button";

export const HomePage: FunctionComponent = () => {
    return (
        <Home
            headerSectionCompositions={
                <Header title="Gerador de senha" description="Utilize o nosso gerador online para criar uma senha forte e segura." />
            }
            passwordVisualizerCompositions={
                <Fragment>
                    <InputText />

                    <InputRange />
                </Fragment>
            }
            customPasswordOptionsCompositions={<div>Custom Password Options</div>}
            copyPasswordButtonCompositions={
                <Button
                    label="Copiar senha"
                    handleClick={() => {
                        console.log("Senha copiada!");
                    }}
                />
            }
        />
    );
};
