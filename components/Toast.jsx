const Toast = ({ message, type, duration}) => {
    const bgColor = {
        info: 'bg-blue-400',
        success: 'bg-green-400',
        warning: 'bg-yellow-400',
        error: 'bg-red-400'
    }[type] | 'bg-gray-400';

    return (
        <div className={`${bgColor} text-white p-4 mb-2 rounded shadow-lg transition-all duration-300`} style={{ animation: `fadeInOut ${duration}mx`}}>
            {message}
        </div>
    )
}

export default Toast;