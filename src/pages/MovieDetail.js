import { Box, Center, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailCard from '../components/UI/MovieDetailCard';

const MovieDetail = () => {
  const [details, setDetails] = useState(null);
  let { movieId } = useParams();
  // console.log('details are:', details);
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f823ab276565607de98752dcca12f482`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (!res || res.success == false) {
          // console.log('no res in fetch');
          return;
        }
        setDetails(res);
      });
  }, []);

  let content = (
    <Center >
      <Spinner size="xl" />
    </Center>
  );
  if (details) {
    const {
      poster_path,
      title,
      overview,
      id,
      original_name,
      popularity,
      production_companies,
      production_countries,
      release_date,
      spoken_languages,
    } = details;
    content = (
      <MovieDetailCard
        poster_path={poster_path}
        title={title ? title : original_name}
        overview={overview}
        id={id}
        popularity={popularity}
        production_companies={production_companies} // array
        production_countries={production_countries}
        release_date={release_date}
        spoken_languages={spoken_languages}
      />
    );
  }
  return <Box w="100%">{content}</Box>;
};

export default MovieDetail;
