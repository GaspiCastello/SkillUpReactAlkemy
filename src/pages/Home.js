import { Stack, Heading, Box, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import List from '../components/List';

const Home = () => {
  return (
    <Box my={3} mx={12}>
      <Stack position="relative" textAlign="center">
        <Flex justify={'space-between'}>
          <Heading fontSize="5xl" marginBottom={12}>
            <Box>Mas recientes</Box>
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
