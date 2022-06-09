import { Heading, Box, Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import List from '../components/List';
import K from '../constants/constants';
import useDebounce from '../hooks/use-debounced';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 750);
  // console.log(results, 'in Home');

  let url = `https://api.themoviedb.org/3/search/movie?api_key=${K.apiKey}&query=${debouncedSearchTerm}`;

  useEffect(() => {
    const controller = new AbortController();
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setIsSearching(false);
          setResults(res.results);
        })
        .catch(error => {
          console.error(error);
          setResults([]);
        });
    } else {
      setResults([]);
    }
    return () => controller.abort();
  }, [debouncedSearchTerm]);

  return (
    <Box>
      <Heading fontSize="5xl">
        <Flex direction={{base:'column', lg:'row'}} justify={'space-between'} alignItems="end">
          <Text w={{base:'100%', lg:'50%'}} boxShadow="md" my={6} px={6}>
            Trendings
          </Text>
          <Input
            my={6}
            p={4}
            onChange={e => setSearchTerm(e.target.value)}
            w={{base:'100%', lg:'50%'}}
            variant="filled"
            focusBorderColor="white"
            placeholder="The movie you are looking for..."
          />
        </Flex>
      </Heading>
      <List results={results} />
    </Box>
  );
};

export default Home;
