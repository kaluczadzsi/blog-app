import { ChangeEvent, useState } from 'react';
import { SearchProps } from '../../types/searchprops';
import SearchInput from './SearchInput';

const Search = ({ setSearchTerm }: SearchProps) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setSearchTerm(inputValue);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center max-w-[1440px] m-auto py-5 md:max-w-[50%]"
    >
      <label className="absolute left-[-99999px]" htmlFor="search">
        Search
      </label>
      <SearchInput value={input} onChange={handleInputChange} />
    </form>
  );
};

export default Search;
