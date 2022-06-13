import {
  Box,
  Divider,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import MovieCard from './MovieCard';

export default function MovieDetailCard({
  poster_path,
  title,
  overview,
  original_name,
  popularity,
  production_companies,
  production_countries,
  spoken_languages,
  id
}) {
  let url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Stack direction={{ base: 'column', md: 'row' }} w={{base:'auto',lg:780}}>
      <MovieCard
        poster_path={poster_path}
        title={title}
        original_name={original_name}
        overview={overview}
        id={id}
      />

      <Box w={{ base: 'auto'}}>
        <Stack
          p={6}
          borderRadius="lg"
          border="1px solid "
          borderColor="red.500"
          boxShadow="lg"
          h="auto"
        >
          <Text fontSize="md" fontWeight="bold" color="red.300">
            Production companies:
          </Text>
          <UnorderedList>
            {production_companies.map(({ name, id }) => {
              return (
                <Text key={id} fontSize="md">
                  {name}
                </Text>
              );
            })}
          </UnorderedList>
          <Divider />
          <Text fontSize="md" fontWeight="bold" color="red.300">
            Production countries:
          </Text>
          <UnorderedList>
            {production_countries.map(({ name }) => {
              return (
                <Text key={name} fontSize="md">
                  {name}
                </Text>
              );
            })}
          </UnorderedList>
          <Divider />
          <Text fontSize="md" fontWeight="bold" color="red.300">
            Spoken languages:
          </Text>
          <UnorderedList>
            {spoken_languages.map(({ name }) => {
              return (
                <Text key={name} fontSize="md">
                  {name}
                </Text>
              );
            })}
          </UnorderedList>
        </Stack>
      </Box>
    </Stack>
  );
}
