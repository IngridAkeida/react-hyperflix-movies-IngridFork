import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import defaultMovie from '../assets/movie-nf.png';
import Skeleton from '../components/ui-components/Skeleton';

const SearchResults = () => {
  const { query } = useParams();
  const [resultsQuery, setResultsQuery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const data = await apiConfig.getSearchMovie(query);
        setResultsQuery(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
  };

  //style components 
  const styleUl = 'flex flex-wrap gap-4';
  const styleLi = 'p-3 hover:bg-m_darkGrey cursor-pointer';
  const styleFirstDiv = 'w-[80vw] sm:w-[40vw] md:w-[16vw] lg:w-[16vw] h-[220px] inline-block overflow-hidden';

  if (loading) {
    return (
      <div className='pt-[120px]'>
        <h2 className='p-4'>Search Results</h2>
        <div className='px-8'>
          <ul className={styleUl}>
            {[...Array(15)].map((_, index) => (
              <li className={styleLi} key={index}>
                <div className={styleFirstDiv}>
                  <Skeleton className='w-[600px] h-64 rounded-md' />
                </div>
                <div className='flex justify-between'>
                  <Skeleton className='w-[100px] h-4 my-2' />
                  <Skeleton className='w-[30px] h-4 my-2' />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-[120px]'>
      <h2 className='p-4'>Search Results</h2>
      <div className='px-8'>
        <ul className='flex flex-wrap gap-4'>
          {resultsQuery.map((movie) => (
            <li className={styleLi} key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <div className={styleFirstDiv}>
                  <img className='w-full h-full block object-cover' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultMovie} alt={movie.title} />
                </div>
                <div className='flex justify-between w-full'>
                  <p className='text-sm'>{truncateTitle(movie.title, 25)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
