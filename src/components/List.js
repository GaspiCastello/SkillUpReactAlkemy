import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

let url =
  'https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=true&page=2022-06-31&release_date.lte=2022-05-31&with_watch_monetization_types=flatrate&api_key=f823ab276565607de98752dcca12f482';

const List = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url).then(res =>
        res.json()).then(d => {
            console.log(d,d.results)
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
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <GridItem
          borderRadius="15px"
          key={index}
          w="100%"
          h="400"
          bg="blue.600"
        />
      ))}
    </Grid>
  );
};

export default List;
