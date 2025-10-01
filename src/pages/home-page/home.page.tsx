// Dependencies
import { Fragment, FunctionComponent, useState } from "react";

// Components
import { Home } from "../../components/pages/home";
import { Header } from "../../components/sections/header";
import { InputRange, InputText } from "../../components/elements/input";
import { Button } from "../../components/elements/button";

// Hooks
import { usePasswordGenerate } from "../../hooks/use-password-generate";

// Utils
import { copyToClipboard } from "../../utils/copy";

export const HomePage: FunctionComponent = () => {
    const [passwordLength, setPasswordLength] = useState<number>(16);

    const { handlePasswordGenerate, generatedPassword } = usePasswordGenerate();

    const handleRangeChange = (value: number) => {
        setPasswordLength(value);

        handlePasswordGenerate(value);
    };

    return (
        <Home
            headerSectionCompositions={
                <Header title="Gerador de senha" description="Utilize o nosso gerador online para criar uma senha forte e segura." />
            }
            passwordVisualizerCompositions={
                <Fragment>
                    <InputText value={generatedPassword} />

                    <InputRange handleChange={handleRangeChange} defaultValue={passwordLength} />
                </Fragment>
            }
            customPasswordOptionsCompositions={<div>Custom Password Options</div>}
            copyPasswordButtonCompositions={<Button label="Copiar senha" handleClick={() => copyToClipboard(generatedPassword)} />}
        />
    );
};
