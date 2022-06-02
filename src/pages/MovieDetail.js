import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const MovieDetail = props => {
  let { movieId } = useParams();
  return <Text>MovieDetail of {movieId}</Text>;
};

export default MovieDetail;
