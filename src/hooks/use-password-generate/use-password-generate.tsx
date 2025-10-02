// Dependencies
import { useState, useCallback } from "react";

export const usePasswordGenerate = () => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("");
    const [securityPercent, setSecurityPercent] = useState<number>(0);

    const handlePasswordSecurityCheck = useCallback((password: string) => {
        const hasUppercaseChars = /[A-Z]/.test(password);

        const hasNumbersChars = /[0-9]/.test(password);

        const hasSymbolsChars = /[!@#$%^&*(),.?:{}|<>]/.test(password);

        const checkSecurityPercent = Math.round(
            (password.length / 64) * 25 + (hasUppercaseChars ? 15 : 0) + (hasNumbersChars ? 25 : 0) + (hasSymbolsChars ? 35 : 0)
        );

        setSecurityPercent(checkSecurityPercent);
    }, []);

    const handlePasswordGenerate = useCallback(
        (length: number = 8, chars: string) => {
            const passwordChars = [];

            for (let i = 0; i < length; i++) {
                const randomChar = Math.floor(Math.random() * chars.length);
                const passwordChar = chars.substring(randomChar, randomChar + 1);
                passwordChars.push(passwordChar);
            }

            const password = passwordChars.join("");
            setGeneratedPassword(password);
            handlePasswordSecurityCheck(password);
        },
        [handlePasswordSecurityCheck]
    );

    return { generatedPassword, handlePasswordGenerate, securityPercent };
};
