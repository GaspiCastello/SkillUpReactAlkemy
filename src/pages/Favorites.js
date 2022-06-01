import { Box, ChakraProvider, Grid, theme, Text } from '@chakra-ui/react';

const Favorites = props => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Text>
            <h1>Favorites</h1>
          </Text>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Favorites;
