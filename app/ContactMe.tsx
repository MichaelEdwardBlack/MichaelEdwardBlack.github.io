import { motion } from "framer-motion";
import { OutlinedInput } from "../components/Inputs/OutlinedInput";
import { useState } from "react";
import { TextArea } from "../components/Inputs/TextArea";
import { Button } from "../components/Buttons";
import { ToastType, useToasts } from "../components/Toast";

const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const toasts = useToasts();

  const validateEmail = () => {
    setIsValidEmail(emailTester.test(email));
  };

  const validateAndSetEmail = (value: string) => {
    setEmail(value);
    if (emailTester.test(value)) {
      console.log(value);
      setIsValidEmail(true);
    }
  };

  const sendEmail = () => {
    let link = document.createElement("a");
    link.href = `mailto:michaelblack117@gmail.com?subject=Message from ${name}&from=${email}&body=${message}`;
    link.click();
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowValidation(true);
    try {
      sendEmail();
    } catch {
      toasts.addToast({
        title: "Email Client Failed to Open!",
        type: ToastType.Error,
      });
    }
  };

  return (
    <motion.div
      initial={{
        scaleX: -1,
        skewY: -2,
      }}
      whileInView={{
        scaleX: [-1, 0, 1],
        skewY: [-1, 1, 0, 0],
        transition: { delay: 0.2, duration: 1 },
      }}
      className="grid w-full max-w-2xl grid-cols-1 p-8 rounded-lg shadow-lg backdrop-blur to-gray-300 from-gray-100 bg-gradient-to-br dark:shadow-gray-900 dark:from-gray-700 dark:to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.7, duration: 0.5 } }}
        className="grid w-full grid-cols-2 md:grid-cols-3"
      >
        <img
          src="/michaeledwardblack.github.io/BlackliteCircleLogo.png"
          height={128}
          width={128}
          className="hidden rounded-full md:block"
          alt="icon"
        />
        <form className="col-span-2 px-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <h2 className="text-center">Contact me</h2>
            <OutlinedInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              showError={showValidation && name.length === 0}
              errorMessage="I'd like to know who you are or at least what to call you if you don't mind"
            />

            <OutlinedInput
              label="Email"
              value={email}
              onChange={(e) => validateAndSetEmail(e.target.value)}
              onBlur={validateEmail}
              showError={!isValidEmail}
              errorMessage="Please enter a valid email"
            />
            <TextArea
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write me something here..."
              showError={showValidation && message.length === 0}
              errorMessage="You'll have to write something here for the message to send"
            />

            <Button type="submit">Send</Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

// /* From https://css.glass */
// background: rgba(255, 255, 255, 0.2);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(5px);
// -webkit-backdrop-filter: blur(5px);
// border: 1px solid rgba(255, 255, 255, 0.3);
