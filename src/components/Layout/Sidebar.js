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
      pos="sticky"
      left="5"
      h="100vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius="15px"
      w={{ base: '100px', md: '175px' }}
      flexDir="column"
      bg="red.500"
    >
      <Link to={'/'}>
          <ColorModeSwitcher marginTop={3} />
      </Link>
      <Link to={'/favorites'}>
        <NavItem icon={FiHome} title="Releases" />
      </Link>
      <Link to={'/favorites'}>
        <NavItem icon={AiOutlineStar} title="Favorites" />
      </Link>
    </Flex>
  );
}
