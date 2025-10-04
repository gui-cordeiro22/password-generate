// Dependencies
import { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react";

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
import { defaultChars, numbersChars, symbolsChars, uppercaseChars } from "../../utils/constants";
import { PasswordSettings } from "../../components/sections/password-settings";

export const HomePage: FunctionComponent = () => {
    const [passwordLength, setPasswordLength] = useState<number>(16);
    const [selectedOption, setSelectedOption] = useState<string[]>([]);

    const charVariants: Record<string, string> = {
        Maiúsculas: uppercaseChars,
        Números: numbersChars,
        Símbolos: symbolsChars,
    };

    const { handlePasswordGenerate, generatedPassword, securityPercent } = usePasswordGenerate();

    const passwordChars = useMemo(() => {
        return [defaultChars, ...selectedOption.map((variant) => charVariants[variant] ?? "")].join("");
    }, [selectedOption]);

    const handleCheckboxChange = useCallback((option: string) => {
        setSelectedOption((prev) => (prev.includes(option) ? prev.filter((v) => v !== option) : [...prev, option]));
    }, []);

    const handleRangeChange = useCallback(
        (value: number) => {
            setPasswordLength(value);
            handlePasswordGenerate(value, passwordChars);
        },
        [passwordChars, handlePasswordGenerate]
    );

    useEffect(() => {
        handlePasswordGenerate(passwordLength, passwordChars);
    }, [passwordChars, passwordLength, handlePasswordGenerate]);

    return (
        <Home
            headerSectionCompositions={<Header title={data.headerSection.title} description={data.headerSection.description} />}
            passwordSettingsSectionsCompositions={
                <PasswordSettings
                    passwordVisualizerCompositions={
                        <InputText
                            value={generatedPassword}
                            copyButtonElementCompositions={<Copy onClick={() => copyToClipboard(generatedPassword)} />}
                            regenerateButtonElementCompositions={<RefreshCcw onClick={() => handlePasswordGenerate(passwordLength, passwordChars)} />}
                            progressBarElementCompositions={<ProgressBar percent={securityPercent} />}
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
                                    checked={selectedOption.includes(option.label)}
                                    checkedIconElement={<Check size={10} color="#fff" />}
                                    handleChange={() => {
                                        handleCheckboxChange(option.label);
                                    }}
                                />
                            ))}
                        />
                    }
                    copyPasswordButtonCompositions={
                        <Button label={data.actionButtons.label} handleClick={() => copyToClipboard(generatedPassword)} />
                    }
                />
            }
        />
    );
};
