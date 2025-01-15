import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  placeholder,
}: {
  placeholder: string;
}): React.JSX.Element => {
  return (
    <div className={`relative w-full`}>
      <label className="sr-only">Search</label>
      <input
        className="
            w-full
            flex rounded-md border py-[9px] pl-10 pr-4 outline-2 font-semibold
            placeholder:text-gray-500
          "
        type="search"
        placeholder={placeholder}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;
