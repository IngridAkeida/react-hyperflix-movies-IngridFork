//import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const SearchField = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const searchMovies = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search-results/${query}`);
      setQuery('');
    } 
  }

  return(
 

    <form className=" w-[70vw] sm:w-[50vw]" onSubmit={searchMovies}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-m_gold dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-m_gold focus:border-m_gold dark:bg-gray-700 dark:border-gray-600 placeholder-m_gold dark:text-white dark:focus:ring-m_gold dark:focus:border-m_gold" placeholder="Search for Movies..." value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" className=" text-m_white absolute end-2.5 bottom-2.5 bg-m_gold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-m_gold font-medium rounded-lg text-sm px-4 py-2 dark:bg-m_gold dark:hover:bg-m_gold dark:focus:ring-m_gold">Search</button>
    </div>
</form>
  )
}

export default SearchField;



