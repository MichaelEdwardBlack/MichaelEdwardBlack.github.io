import { useRouter } from "next/navigation";

export const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between gap-2 p-3 border-b-2 border-gray-800 dark:border-white backdrop-blur-sm">
      <div className="flex items-center gap-2 cursor-pointer hover:text-primary-500" onClick={() => router.push("/")}>
        <img
          src="/michaeledwardblack.github.io/BlackliteCircleLogo.png"
          height={36}
          width={36}
          className="rounded-full"
          alt="icon"
        />
        <h6>Home</h6>
      </div>
    </div>
  );
};
