import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import MovieCard from './UI/MovieCard';

const Results = ({results}) => {

  // // console.log(results);
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1 , 1fr)',
        lg: 'repeat(2 , 1fr)',
        xl: 'repeat(3 , 1fr)',
      }}
      gap={8}
    >
      {results ? (
        results.map(
          (
            { poster_path, title, original_name = 'title', overview,id },
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

export default Results;
