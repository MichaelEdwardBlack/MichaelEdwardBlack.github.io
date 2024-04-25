export type NavbarLinkProps = React.PropsWithChildren & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarLink = ({ children, className, href, ...props }: NavbarLinkProps) => {
  let classArray = [
    "block",
    "mt-4",
    "mr-4",
    "lg:inline-block",
    "lg:mt-0",
    "cursor-pointer",
    "hover:text-primary-500",
    className,
  ];

  let baseClass = classArray.join(" ");

  return (
    <a href={href} className={baseClass} {...props}>
      {children}
    </a>
  );
};
