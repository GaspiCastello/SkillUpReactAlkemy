import { Stack, Heading, Box, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import List from '../components/List';

const Home = () => {
  return (
    <Box
      mx={12}
    >
      <Stack position="relative" textAlign="center">
        <Flex justify={'space-between'}>
          <Heading fontSize="5xl" marginBottom={12} w='100%'>
            <Box boxShadow='md' m={6} p={4} > Trendings</Box>
          </Heading>
        </Flex>

        <Box>
          <List />
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
