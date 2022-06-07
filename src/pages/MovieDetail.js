import { Box, Center, Spinner } from '@chakra-ui/react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/UI/MovieCard';

const MovieDetail = () => {
  const [details, setDetails] = useState(null);
  let { movieId } = useParams();
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f823ab276565607de98752dcca12f482`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setDetails(res);
      });
  }, []);
  let content = <Spinner />;
  if (details) {
    const { poster_path, title, overview, id, original_name } = details;
    content = (
        <MovieCard
          poster_path={poster_path}
          title={title ? title : original_name}
          overview={overview}
          id={id}
        />
    );
  }
  return<Center w={{ base: '300px', md: '500px' }}>{content}</Center>;
};

export default MovieDetail;
