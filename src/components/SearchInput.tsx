import { SearchInputProps } from '../../types/searchinputprops';

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      className="outline-none w-full p-1 rounded-sm"
      type="text"
      id="search"
      placeholder="Search by title"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
