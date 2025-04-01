import Toast from "./Toast";

const ToastContainer = ({ toasts}) => {
    return (
        <div className="fixed bottom-4 right-4 space-y-2">
            {toasts.map((toast) => (
                <Toast key={toast.id} message={toast.message} type={toast.type} duration={toast.duration} />
            ))}
        </div>
    )
}

export default ToastContainer;