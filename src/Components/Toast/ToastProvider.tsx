import { useMemo, useState } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "./Toast";
import { ToastsContainer } from "./ToastStyles";

type ToastType = {
    message: string;
    id: number;
};

interface Props {
    children: React.ReactNode;
}

const ToastProvider = ({ children }: Props) => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    const openToast = (message: string) => {
        const newToast = {
            id: Date.now(),
            message: message,
        };
        setToasts((prev) => [...prev, newToast]);
    };

    const closeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const contextValue = useMemo(() => ({
        open: openToast,
        close: closeToast,
    }), []);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastsContainer>
                {toasts.map((toast) => (
                    <Toast key={toast.id} message={toast.message} close={() => closeToast(toast.id)} />
                ))}
            </ToastsContainer>
        </ToastContext.Provider>
    );
};


export default ToastProvider;
