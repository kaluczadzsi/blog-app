import { useState } from 'react';
import SetSearchTerm from '../types/setsearchtherm';

const Search = ({ setSearchTerm }: SetSearchTerm) => {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-center max-w-[1440px] m-auto py-5 md:max-w-[50%]"
    >
      <label className="absolute left-[-99999px]" htmlFor="search">
        Search
      </label>
      <input
        className=" outline-none w-full p-1 rounded-sm"
        type="text"
        id="search"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setSearchTerm(input);
        }}
      />
    </form>
  );
};

export default Search;
