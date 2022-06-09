import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import MovieCard from './UI/MovieCard';
import K from '../constants/constants';

let url =
 `https://api.themoviedb.org/3/trending/all/week?api_key=${K.apiKey}`;

const List = ({ results=[] }) => {
  const [movies, setMovies] = useState([]);
  // console.log(results,'in List')

  useEffect(() => {
   
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setMovies(res.results);
        });
        // console.log('fetching in List')
    }, []);

    let toMap
    if (results.length !== 0) {
      toMap=results
    }else{
      toMap=movies
    }
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1 , 1fr)',
        lg: 'repeat(2 , 1fr)',
        xl: 'repeat(3 , 1fr)',
      }}
      gap={8}
    >
      {toMap ? (
        toMap.map(
          (
            { poster_path, title, original_name = 'title', overview, id },
            index
          ) => (
            <GridItem borderRadius="15px" key={index} w="100%">
              <MovieCard
                poster_path={poster_path}
                title={title ? title : original_name}
                overview={overview}
                id={id}
              />
            </GridItem>
          )
        )
      ) : (
        <Spinner />
      )}
    </Grid>
  );
};

export default List;
