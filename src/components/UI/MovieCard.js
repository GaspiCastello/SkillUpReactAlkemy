import { Box, Image, Stack, StackDivider, Text } from '@chakra-ui/react';

export default function MovieCard({ poster_path, title, overview }) {
  let url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Box p={6} borderRadius="lg" border='1px solid red' boxShadow='lg'>
      <Stack flexDirection="column" >
        <Image borderRadius={12} src={url} h="600px" objectFit="cover" />
        <StackDivider />
        <Text fontSize="xl">{title}</Text>
        <StackDivider />
        <Text fontSize="md">{overview}</Text>
      </Stack>
    </Box>
  );
}
