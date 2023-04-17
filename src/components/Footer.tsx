import { GithubIcon } from "./AnimatedIcons/GithubIcon";
import { FingerPrintIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 bg-gray-200 justify-items-center dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4 text-secondary-500">
        <h6 className="text-primary-500">Navigation</h6>
        <a className="cursor-pointer hover:underline" href="/">
          Home
        </a>
        <a className="cursor-pointer hover:underline" href="/resume">
          Resume
        </a>
      </div>
      <div className="flex flex-col items-center gap-4 text-secondary-500">
        <h6 className="text-primary-500">Connect</h6>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-secondary-500 hover:underline"
          onClick={() =>
            window.open("https://github.com/MichaelEdwardBlack", "_blank")
          }
        >
          <GithubIcon height={20} width={20} />
          <div>Github</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 text-secondary-500">
        <h6 className="text-primary-500">Apps</h6>
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-secondary-500 hover:underline"
          onClick={() => window.open("https://dashboard.trinsic.id/", "_blank")}
        >
          <FingerPrintIcon height={20} width={20} />
          <div>Trinsic</div>
        </div>
      </div>
    </div>
  );
};
