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
        const id = Date.now();
        const newToast = {
            id: id,
            message: message,
        };
        setToasts((prev) => [...prev, newToast]);
        setTimeout(() => {
            closeToast(id);
        }, 2000)
    };

    const closeToast = (id: number) => {
        const toastElement = document.getElementById(`toast-${id}`);
        if (toastElement) {
            toastElement.classList.add("fade-out");

            // Wait for the animation to finish before removing it from state
            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
            }, 300); // Match animation duration
        }
    };

    const successToast = () => openToast("Success");



    const contextValue = useMemo(() => ({
        open: openToast,
        success: successToast,
        close: closeToast,
    }), []);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastsContainer>
                {toasts.map((toast) => (
                    <Toast key={toast.id} id={toast.id} message={toast.message} close={() => closeToast(toast.id)} />
                ))}
            </ToastsContainer>
        </ToastContext.Provider>
    );
};


export default ToastProvider;
