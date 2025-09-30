export type ButtonData = {
    label: string;
};

export type ButtonActions = {
    handleClick: () => void;
};

export type ButtonProps = ButtonData & ButtonActions;
