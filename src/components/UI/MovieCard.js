import { Box, Button, Divider, Image, Stack, Text } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favActions } from '../../store/fav-slice';

export default function MovieCard({
  poster_path,
  title,
  original_name,
  overview,
  id,
}) {
  const favsItems = useSelector(state => state.favs.items);
  // console.log(favsItems,'in moviecard')  
  let isFav;
  if (favsItems.find(_id => _id === id)) {
    isFav = true;
  }
  const dispatch = useDispatch();
  let url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const favoriteButtonHandler = e => {
    e.stopPropagation();
    dispatch(favActions.addAndRemove({ id }));
  };
  return (
    <Box
      w="auto"
      p={{ base: 2, md: 6 }}
      borderRadius="lg"
      border="1px solid "
      borderColor="red.500"
      boxShadow="lg"
      justifyContent="center"
    >
      <Stack flexDirection="column">
        <Link to={`/${id}`}>
          <Image m="auto" borderRadius={12} src={url} />
          <Divider />
          <Text fontSize="xl">{title ? title : original_name}</Text>
          <Divider />
          <Text fontSize="md">{overview}</Text>
          <Divider />
        </Link>
        <Button
          onClick={favoriteButtonHandler}
          pos="absolute"
          w={20}
          backgroundColor="red.800"
        >
          {!isFav ? <AiOutlineStar size={35} /> : <AiFillStar size={35} />}
        </Button>
      </Stack>
    </Box>
  );
}
