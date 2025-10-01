// Dependencies
import { useState } from "react";

// Utils
import { defaultChars } from "../../utils/constants";

export const usePasswordGenerate = () => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("");

    const handlePasswordGenerate = (length: number = 8) => {
        setGeneratedPassword("");

        for (let i = 0; i < length; i++) {
            const randomChar = Math.floor(Math.random() * defaultChars.length);

            const passwordChar = defaultChars.substring(randomChar, randomChar + 1);

            setGeneratedPassword((prev) => prev + passwordChar);
        }
    };

    return { generatedPassword, handlePasswordGenerate };
};
