import { SearchIcon } from "../Icons";

export type SearchBarProps = React.HTMLAttributes<HTMLDivElement> & {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};
export const SearchBar = ({ className, onChange, inputProps, ...props }: SearchBarProps) => {
  let classArray = ["relative", "text-gray-600", className];
  let baseClass = classArray.join(" ");

  return (
    <div className={baseClass} {...props}>
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        {...inputProps}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
