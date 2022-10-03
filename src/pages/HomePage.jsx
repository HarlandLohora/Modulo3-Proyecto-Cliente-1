import logo from "../logo.svg";
import "../App.css";
import Post from "../components/Post/Post";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';


function HomePage() {
  return (
    <div className="App">
     <header>
        <div className="text-header">
          <h1>Title Web Site</h1>
          <p>lorem</p>
        </div>
        <div className="img-header">
          <img src="./images/header.png"></img>
        </div>
     </header>
        <div className="container">
          <Post />
        </div>


        <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
       
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
       
        </Stack>
      </Container>
    </Box>
     </div>
  );
}



export default HomePage;