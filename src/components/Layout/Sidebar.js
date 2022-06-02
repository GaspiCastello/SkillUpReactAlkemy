import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import { FiHome } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

import NavItem from './NavItem';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Sidebar() {
  return (
    <Flex
      pos="fixed"
      left="5"
      h="100vh"
      marginTop="2.5vh"
      borderRadius="lg"
      w={{ base: '100px', md: '175px' }}
      flexDir="column"
      bg="red.500"
    >
      <Link to={'/'}>
        <ColorModeSwitcher marginTop={3} />
      </Link>
      <Link to={'/'}>
        <NavItem icon={FiHome} title="Trendings" />
      </Link>
      <Link to={'/favorites'}>
        <NavItem icon={AiOutlineStar} title="Favorites" />
      </Link>
    </Flex>
  );
}
