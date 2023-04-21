import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useState } from "react";

export interface ToastItem {
  title: string;
  content?: string;
  type: ToastType;
}

export enum ToastType {
  Success,
  Warning,
  Error,
  Info,
}

export interface ToastContextActions {
  addToast: (toast: ToastItem) => void;
  removeToast: (id: number) => void;
}

const ToastContext = React.createContext<ToastContextActions>({
  addToast: () => {},
  removeToast: () => {},
});

function ToastContainer(props: React.PropsWithChildren<{}>) {
  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
      >
        <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
          {props.children}
        </div>
      </div>
    </>
  );
}

const Toast = (props: { toast: ToastItem; onDismiss: () => void }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, [props]);
  return (
    <Transition
      show={show}
      as={Fragment}
      afterLeave={props.onDismiss}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto dark:bg-gray-900 dark:text-white ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {props.toast.type === ToastType.Success && (
                <CheckCircleIcon
                  className="w-6 h-6 text-green-400"
                  aria-hidden="true"
                />
              )}
              {props.toast.type === ToastType.Warning && (
                <ExclamationCircleIcon
                  className="w-6 h-6 text-orange-400"
                  aria-hidden="true"
                />
              )}
              {props.toast.type === ToastType.Info && (
                <InformationCircleIcon
                  className="w-6 h-6 text-blue-400"
                  aria-hidden="true"
                />
              )}
              {props.toast.type === ToastType.Error && (
                <XCircleIcon
                  className="w-6 h-6 text-red-400"
                  aria-hidden="true"
                />
              )}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium">{props.toast.title}</p>
              {props.toast.content && (
                <p className="mt-1 text-sm text-gray-500">
                  {props.toast.content}
                </p>
              )}
            </div>
            <div className="flex flex-shrink-0 ml-4">
              <button
                type="button"
                className="inline-flex text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={props.onDismiss}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

let toastCount = 0;

interface StoredToastContext extends ToastItem {
  id: number;
}

export function ToastProvider(props: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<StoredToastContext[]>([]);
  const addToast = (toast: ToastItem) => {
    const id = toastCount++;
    const storedToast = {
      id,
      ...toast,
    };
    setToasts([...toasts, storedToast]);
  };
  const removeToast = (id: number) => {
    console.log("removing toast");
    const newToasts = toasts.filter((t) => t.id !== id);
    setToasts(newToasts);
  };
  const onDismiss = (id: number) => () => removeToast(id);
  const providerValue: ToastContextActions = { addToast, removeToast };
  return (
    <ToastContext.Provider value={providerValue}>
      {props.children}
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onDismiss={() => onDismiss(toast.id)}
          />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export const useToasts = () => React.useContext(ToastContext);
