// Dependencies
import { Fragment, FunctionComponent, useEffect, useState } from "react";

// Components
import { Home } from "../../components/pages/home";
import { Header } from "../../components/sections/header";
import { InputRange, InputText } from "../../components/elements/input";
import { Button } from "../../components/elements/button";
import { ProgressBar } from "../../components/elements/progress-bar";

// Assets
import { Copy, RefreshCcw } from "lucide-react";

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

    useEffect(() => {
        handlePasswordGenerate(passwordLength);
    }, []);

    return (
        <Home
            headerSectionCompositions={
                <Header title="Gerador de senha" description="Utilize o nosso gerador online para criar uma senha forte e segura." />
            }
            passwordVisualizerCompositions={
                <Fragment>
                    <InputText
                        value={generatedPassword}
                        copyButtonElementCompositions={<Copy onClick={() => copyToClipboard(generatedPassword)} />}
                        regenerateButtonElementCompositions={<RefreshCcw onClick={() => handlePasswordGenerate(passwordLength)} />}
                        progressBarElementCompositions={<ProgressBar />}
                    />

                    <InputRange handleChange={handleRangeChange} defaultValue={passwordLength} />
                </Fragment>
            }
            customPasswordOptionsCompositions={<div>Custom Password Options</div>}
            copyPasswordButtonCompositions={<Button label="Copiar senha" handleClick={() => copyToClipboard(generatedPassword)} />}
        />
    );
};
