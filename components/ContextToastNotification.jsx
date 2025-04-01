import { useToast } from "./ToastContext"

const TriggerContextNotification = () => {
    const { addToast } = useToast();

    return (
        <button onClick={() => addToast('Task Completed!', 'success', 3000)}
            className="bg-blue-500 text-white p-2 rounded">
                Show Toast
            </button>
    )
}

export default TriggerContextNotification;