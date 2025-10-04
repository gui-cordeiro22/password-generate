// Utils
import { ERRORS_MESSAGES, SUCCESS_MESSAGES } from "./constants";

const formatSuccess = (action: keyof typeof SUCCESS_MESSAGES): string => {
    return SUCCESS_MESSAGES[action];
};

const formatErrors = (error: keyof typeof ERRORS_MESSAGES): string => {
    return ERRORS_MESSAGES[error];
};

export const formatMessage = {
    success: (param: keyof typeof SUCCESS_MESSAGES) => formatSuccess(param),
    error: (param: keyof typeof ERRORS_MESSAGES) => formatErrors(param),
};
