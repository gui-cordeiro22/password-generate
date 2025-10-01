// Dependencies
import { FunctionComponent, useEffect, useState } from "react";

// Components
import { Home } from "../../components/pages/home";
import { Header } from "../../components/sections/header";
import { InputRange, InputText } from "../../components/elements/input";
import { Button } from "../../components/elements/button";
import { ProgressBar } from "../../components/elements/progress-bar";
import { CustomPasswordOptions } from "../../components/sections/custom-password-options";
import { Checkbox } from "../../components/elements/checkbox";

// Assets
import { Check, Copy, RefreshCcw } from "lucide-react";

// Hooks
import { usePasswordGenerate } from "../../hooks/use-password-generate";

// Utils
import { data } from "./home.data";
import { copyToClipboard } from "../../utils/copy";

export const HomePage: FunctionComponent = () => {
    const [passwordLength, setPasswordLength] = useState<number>(16);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const { handlePasswordGenerate, generatedPassword } = usePasswordGenerate();

    const handleRangeChange = (value: number) => {
        setPasswordLength(value);

        handlePasswordGenerate(value);
    };

    const handleCheckboxChange = (value: string) => {
        setSelectedOptions((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    };

    useEffect(() => {
        handlePasswordGenerate(passwordLength);
    }, []);

    return (
        <Home
            headerSectionCompositions={<Header title={data.headerSection.title} description={data.headerSection.description} />}
            passwordVisualizerCompositions={
                <InputText
                    value={generatedPassword}
                    copyButtonElementCompositions={<Copy onClick={() => copyToClipboard(generatedPassword)} />}
                    regenerateButtonElementCompositions={<RefreshCcw onClick={() => handlePasswordGenerate(passwordLength)} />}
                    progressBarElementCompositions={<ProgressBar />}
                />
            }
            customPasswordOptionsCompositions={
                <CustomPasswordOptions
                    title={data.customPasswordOptionsSection.title}
                    passwordLengthLabel={`${data.customPasswordOptionsSection.passwordLengthLabel} ${passwordLength}`}
                    inputRangeElementCompositions={<InputRange handleChange={handleRangeChange} defaultValue={passwordLength} />}
                    optionsElements={data.customPasswordOptionsSection.passwordOptions.map((option, index) => (
                        <Checkbox
                            label={option.label}
                            key={`option-${index}`}
                            value={option.label}
                            checked={selectedOptions.includes(option.label)}
                            checkedIconElement={<Check size={10} color="#fff" />}
                            handleChange={() => {
                                handleCheckboxChange(option.label);
                            }}
                        />
                    ))}
                />
            }
            copyPasswordButtonCompositions={<Button label={data.actionButtons.label} handleClick={() => copyToClipboard(generatedPassword)} />}
        />
    );
};
