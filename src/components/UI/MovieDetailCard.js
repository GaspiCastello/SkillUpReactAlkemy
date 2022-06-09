import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export default function MovieDetailCard({
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
}) {
  let url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      // divider={<StackDivider borderColor="gray.200" />}
    >
      <Box
        w={{ base: '100%', md: '70%' }}
        p={6}
        borderRadius="lg"
        border="1px solid "
        borderColor="red.500"
        boxShadow="lg"
      >
        <Stack flexDirection="column">
          <Image borderRadius={12} src={url} h="600px" objectFit="cover" />
          <Divider />
          <Flex justifyContent="space-between">
            <Text fontSize="xl">{title ? title : original_name}</Text>

            <Badge
              colorScheme="red"
              px={6}
              fontSize="lg"
              borderRadius={9999999}
            >
              Rate: {Math.floor(popularity)}
            </Badge>
          </Flex>
          <Divider />
          <Text fontSize="md">{overview}</Text>
          <Divider />
          <Button pos="absolute" w={20} backgroundColor="red.800">
            <AiOutlineStar size={35} />
          </Button>
        </Stack>
      </Box>

      <Box w={{ base: '100%', md: '30%' }}>
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
