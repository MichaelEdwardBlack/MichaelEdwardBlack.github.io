import { useNavigate } from "react-router-dom";
import { GithubIcon } from "./AnimatedIcons/GithubIcon";
import { FingerPrintIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 py-4 justify-items-center">
      <div className="flex flex-col gap-4">
        <h6 className="text-primary-500">Navigation</h6>
        <a
          className="cursor-pointer text-secondary-500 hover:underline"
          href="/home"
        >
          Home
        </a>
        <a
          className="cursor-pointer text-secondary-500 hover:underline"
          href="/portfolio"
        >
          Portfolio
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="text-primary-500">Connect</h6>
        <div
          className="flex gap-2 cursor-pointer hover:text-secondary-500"
          onClick={() => navigate("https://github.com/MichaelEdwardBlack")}
        >
          <GithubIcon height={20} width={20} />
          <div>Github</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="text-primary-500">Apps</h6>
        <div
          className="flex gap-2 cursor-pointer hover:text-secondary-500"
          onClick={() => navigate("https://dashboard.trinsic.id/")}
        >
          <FingerPrintIcon height={20} width={20} />
          <div>Trinsic</div>
        </div>
      </div>
    </div>
  );
};
