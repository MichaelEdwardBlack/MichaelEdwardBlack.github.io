import { CheckCircleIcon } from "@heroicons/react/24/solid";

export interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  errorMessage?: string;
  showError?: boolean;
  showValid?: boolean;
}

export const TextArea = ({
  label,
  errorMessage = undefined,
  showError = false,
  showValid = true,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <div className="relative flex flex-col w-full">
      <div
        className={`${className} peer w-full border-2 rounded-lg bg-transparent outline-none p-3 ${
          showError && errorMessage
            ? "border-red-500 text-red-500"
            : "border-gray-500 focus-within:border-primary-500"
        }`}
      >
        <textarea
          placeholder={props.placeholder ?? label}
          className="w-full bg-transparent outline-none resize-none focus:placeholder:opacity-0"
          {...props}
        />
      </div>

      {showError && errorMessage && (
        <div className={`pt-1 text-xs text-red-500`}>{errorMessage}</div>
      )}

      <span
        className={`pointer-events-none absolute left-2 -top-2 px-1 text-xs duration-75 backdrop-blur-lg ${
          (props.value?.toString().length ?? 0) > 0
            ? "opacity-100"
            : "opacity-0"
        } peer-focus-within:opacity-100 ${
          showError && errorMessage ? "text-red-500" : ""
        }`}
      >
        {label}
      </span>
      {errorMessage === undefined && showValid && (
        <div className="absolute top-0 bottom-0 right-0 flex items-center h-full pr-3 place-content-center">
          <CheckCircleIcon
            width={24}
            height={24}
            className="text-secondary-500"
          />
        </div>
      )}
    </div>
  );
};
