import { SearchInputProps } from '../../types/searchinputprops';

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <input
      className="outline-none w-[600px] max-w-[600px] p-2 rounded-2xl text-xl font-medium text-center mb-[8px] shadow-md"
      type="text"
      id="search"
      placeholder="Search by title"
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default SearchInput;
