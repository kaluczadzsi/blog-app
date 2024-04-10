import { SearchInputProps } from '../../types/searchinputprops';

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      className="outline-none w-full p-2 rounded-2xl pl-8 text-center mb-[8px]"
      type="text"
      id="search"
      placeholder="Search by title"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
