import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Favorites = props => {
  const favsItems = useSelector(state => state.favs.items);
  console.log(favsItems)
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       if (!res || res.success == false) {
  //         // console.log('no res in fetch');
  //         return;
  //       }
  //       setDetails(res);
  //     });
  // }, []);
  return (
    <Box>
      <Heading fontSize="5xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          justify={'space-between'}
          alignItems="end"
        >
          <Text w={{ base: '100%', lg: '50%' }} boxShadow="md" my={6} px={6}>
            Favorites
          </Text>
        </Flex>
      </Heading>

      {/* <List results={results} /> */}
    </Box>
  );
};

export default Favorites;
