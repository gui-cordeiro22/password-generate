// Dependencies
import { useState } from "react";

export const usePasswordGenerate = () => {
    const [generatedPassword, setGeneratedPassword] = useState<string>("");

    const handlePasswordGenerate = (length: number = 8, chars: string) => {
        setGeneratedPassword("");

        for (let i = 0; i < length; i++) {
            const randomChar = Math.floor(Math.random() * chars.length);

            const passwordChar = chars.substring(randomChar, randomChar + 1);

            setGeneratedPassword((prev) => prev + passwordChar);
        }
    };

    return { generatedPassword, handlePasswordGenerate };
};
