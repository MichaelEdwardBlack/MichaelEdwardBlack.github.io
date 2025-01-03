import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button } from "../../components/Buttons";
import { useRecoilValue } from "recoil";
import { themeState } from "../../atoms/theme";

interface BrokeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const BrokeModal = ({isOpen, onClose}: BrokeModalProps) => {
  const theme = useRecoilValue(themeState);
  const panelColors = theme === "light"? "border-black/5" : "bg-white/5";
  const titleColors = theme === "light"? "text-black" : "text-white";
  const pColors = theme === "light"? "text-black/50" : "text-white/50";

  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          <DialogPanel
            transition
            className={`w-full max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 ${panelColors}`}
          >
            <DialogTitle as="h3" className={`font-medium text-base/7 ${titleColors}`}>
              Oh no!
            </DialogTitle>
            <p className={`mt-2 text-sm/6 ${pColors}`}>
              You were greedy and lost all your points this turn!
            </p>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-300 dark:bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold dark:text-white text-black shadow-inner dark:shadow-white/10 shadow-black/10 focus:outline-none dark:data-[hover]:bg-gray-600 data-[hover]:bg-gray-400 data-[focus]:outline-1 dark:data-[focus]:outline-white data-[focus]:outline-black dark:data-[open]:bg-gray-700 data-[open]:bg-gray-300"
                onClick={onClose}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}