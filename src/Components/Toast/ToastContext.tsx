import { createContext, useContext } from "react";

export type ToastContextType = {
    open: (message: string) => void;
    close: (id: number) => void
}

export const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => useContext(ToastContext);