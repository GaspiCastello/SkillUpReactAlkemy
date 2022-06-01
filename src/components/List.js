import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import MovieCard from './UI/MovieCard';

let url =
  'https://api.themoviedb.org/3/trending/all/week?api_key=f823ab276565607de98752dcca12f482';

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setMovies(res.results);
      });
  }, []);
  console.log(movies);
  return (
    <Grid
    templateColumns={{
      base: 'repeat(1 , 1fr)',
      lg: 'repeat(2 , 1fr)',
      xl: 'repeat(3 , 1fr)',
    }}
    gap={8}
    >
      {movies ? (
        movies.map(({ poster_path, title, overview }, index) => (
          <GridItem
            borderRadius="15px"
            key={index}
            w="100%"
            // h="1000"
            // bg="red.600"
          >
          <MovieCard
            poster_path={poster_path}
            title={title}
            overview={overview}
          />
          </GridItem>
        ))
      ) : (
        <Spinner />
      )}
    </Grid>
  );
};

export default List;
