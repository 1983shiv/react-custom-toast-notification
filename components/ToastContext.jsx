"use client"

import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children}) => {
    const [toasts, setToasts] = useState(null);

    const addToast = (message, type='info', duration=300) => {
        const id = Date.now()
        setToasts((prev) => [...prev, {id, message, type, duration}]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id))
        }, duration);
    }

    return (
        <ToastContext.Provider value={{toasts, addToast}}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)