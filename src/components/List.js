import React from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import MovieCard from './UI/MovieCard';

const List = ({ results = [] }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1 , 1fr)',
        lg: 'repeat(2 , 1fr)',
        xl: 'repeat(3 , 1fr)',
      }}
      gap={8}
    >
      {results.length !== 0 ? (
        results.map(
          (
            { poster_path, title, original_name = 'title', overview, id },
            index
          ) => (
            <GridItem borderRadius="15px" key={index} >
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
