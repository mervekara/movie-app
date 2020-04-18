import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';

export const useMovieSearchFetch = () => {
  const [stateSearch, setState] = useState({ moviesSearch: [] });
  const [loadingSearch, setLoading] = useState(false);
  const [errorSearch, setError] = useState(false);

  const fetchSearch= async endpoint => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      const result = await (await fetch(endpoint)).json();
      setState(prev => ({
        ...prev,
        moviesSearch:
          isLoadMore !== -1
        ? [...prev.moviesSearch, ...result.results]
        : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }))

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSearch(POPULAR_BASE_URL);
  }, [])

  return [{ stateSearch, loadingSearch, errorSearch}, fetchSearch];
}