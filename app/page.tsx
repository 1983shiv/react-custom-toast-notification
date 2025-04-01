"use client"

import TriggerContextNotification from "@/components/ContextToastNotification"
import ToastContainer from "@/components/ToastContainer"
import { useToast } from "@/components/ToastContext";

export default function Home() {
  const { toasts } = useToast();
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-20 bg-gray-100 text-black">
      <h1>Toast Notification Excercise</h1>
      <div className="flex flex-row p-4 m-2">
      <TriggerContextNotification label={"Error"} message={"Error Triggered"} type={"error"}/>
      <TriggerContextNotification label={"Success"} message={"Task Completed Successfully"} type={"success"}/>
      </div>
      <ToastContainer toasts={toasts} />
    </div>
  );
}
