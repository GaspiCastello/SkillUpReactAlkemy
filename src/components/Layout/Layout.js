import Sidebar from './Sidebar';
import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Flex
      m={3}
      
    >
      <Box w="auto" mx="0">
        <Sidebar />
      </Box>
      <Box w="100%">
        <main>{children}</main>
      </Box>
      {/* <Footer /> */}
    </Flex>
  );
};

export default Layout;
