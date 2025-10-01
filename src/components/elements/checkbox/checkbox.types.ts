// Types
import { ReactNode } from "react";

export type CheckboxData = {
    label: string;
    value: string;
    checked?: boolean;
};

export type CheckboxElement = {
    checkedIconElement: ReactNode;
};

export type CheckboxAction = {
    handleChange: () => void;
};

export type CheckboxProps = CheckboxData & CheckboxElement & CheckboxAction;
