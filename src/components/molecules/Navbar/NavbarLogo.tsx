export type NavbarLogoProps = React.PropsWithChildren & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarLogo = ({ children, className, ...props }: NavbarLogoProps) => {
  let classArray = ["flex", "items-center", "flex-shrink-0", "mr-6", className];

  let baseClass = classArray.join(" ");

  return (
    <a className={baseClass} {...props}>
      {children}
    </a>
  );
};
