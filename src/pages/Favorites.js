import { Box, ChakraProvider, Grid, theme, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Favorites = props => {
  return (
    <ChakraProvider theme={theme}>
         <Text>
            Favorites
          </Text>
          <Outlet />
    </ChakraProvider>
  );
};

export default Favorites;
