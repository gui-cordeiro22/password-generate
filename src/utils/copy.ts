// Dependencies
import { toast } from "react-toastify";

// Utils
import { formatMessage } from "./format-message";

export const copyToClipboard = (content: string) => {
    try {
        navigator.clipboard.writeText(content);

        toast.success(formatMessage.success("copy"));
    } catch (error) {
        toast.error(formatMessage.error("copy"));

        console.error("Error copying to clipboard:", error);
    }
};
