import { Stack, Heading, Box, Flex } from '@chakra-ui/react';
import List from '../components/List';
import SimpleInputForm from '../components/SimpleInputForm';

const Home = () => {
  return (
    <Box mx={12}>
      <Stack position="relative" textAlign="center">
        {/* <Flex justify={'space-between'}> */}
        <Heading fontSize="5xl" marginBottom={12} w="100%">
          <Box boxShadow="md" m={6} p={4}>
            {' '}
            Trendings
          </Box>
          <SimpleInputForm />
          {/* </Flex> */}
        </Heading>
        <Box>
          <List />
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
