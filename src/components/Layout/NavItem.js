import React from 'react';
import { Flex, Text, Icon, Link, Stack } from '@chakra-ui/react';

export default function NavItem({ icon, title }) {
  return (
    <Flex m={3} flexDir="column">
      <Stack
        direction="row"
        backgroundColor="blue.400"
        p={3}
        borderRadius={8}
        _hover={{ backgroundColor: 'blue.300' }}
      >
        <Icon as={icon} h={8} w={8} fontSize="xl" />
        <Text ml={5} display={{ base: 'none', md: 'block' }}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
}
