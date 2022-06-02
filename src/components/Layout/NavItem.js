import React from 'react';
import { Flex, Text, Icon, Link, Stack } from '@chakra-ui/react';

export default function NavItem({ icon, title }) {
  return (
    <Flex m={3} flexDir="column" boxShadow='md'>
      <Stack
        direction="row"
        backgroundColor="red.800"
        p={3}
        borderRadius={8}
        _hover={{ backgroundColor: 'red.300' }}
      >
        <Icon as={icon} h={8} w={8} fontSize="xl" />
        <Text fontWeight='bold' display={{ base: 'none', md: 'block' }}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
}
