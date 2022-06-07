import { Box, Button, Divider, Image, Stack, Text } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function MovieCard({
  poster_path,
  title,
  original_name,
  overview,
  id,
}) {
  let url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Link to={`/favorites/${id}`}>
      <Box
        p={6}
        borderRadius="lg"
        border="1px solid "
        borderColor="red.500"
        boxShadow="lg"
        
      >
        <Stack flexDirection="column">
          <Image borderRadius={12} src={url} h="600px" objectFit="cover" />
          <Divider />
          <Text fontSize="xl">{title ? title : original_name}</Text>
          <Divider />
          <Text fontSize="md">{overview}</Text>
          <Divider />
          <Button pos="absolute" w={20} backgroundColor="red.800">
            <AiOutlineStar size={35} />
          </Button>
        </Stack>
      </Box>
    </Link>
  );
}
