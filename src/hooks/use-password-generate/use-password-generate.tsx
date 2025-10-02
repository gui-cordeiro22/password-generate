// Dependencies
import { useState } from "react";

export const usePasswordGenerate = () => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("");
    const [securityPercent, setSecurityPercent] = useState<number>(0);

    const handlePasswordGenerate = (length: number = 8, chars: string) => {
        const passwordChars = [];

        for (let i = 0; i < length; i++) {
            const randomChar = Math.floor(Math.random() * chars.length);
            const passwordChar = chars.substring(randomChar, randomChar + 1);
            passwordChars.push(passwordChar);
        }

        const password = passwordChars.join("");
        setGeneratedPassword(password);
        handlePasswordSecurityCheck(password);
    };

    const handlePasswordSecurityCheck = (password: string) => {
        const checkSecurityPercent = (password.length / 64) * 100;

        setSecurityPercent(checkSecurityPercent);
    };

    return { generatedPassword, handlePasswordGenerate, securityPercent };
};
