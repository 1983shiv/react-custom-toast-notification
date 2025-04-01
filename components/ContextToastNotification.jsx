"use client"

import { useToast } from "./ToastContext"

const TriggerContextNotification = ({ label, message, type}) => {
    const { addToast } = useToast();

    const bgColor = {
        info: 'bg-blue-400',
        success: 'bg-green-400',
        warning: 'bg-yellow-400',
        error: 'bg-red-400'
    }[type] || 'bg-gray-400';

    return (
        <button onClick={() => addToast(message, type, 3000)}
            className={`${bgColor} text-white p-2 rounded mx-2`}>
                {label}
            </button>
    )
}

export default TriggerContextNotification;