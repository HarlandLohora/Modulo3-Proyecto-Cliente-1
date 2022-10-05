import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';

const API_URL = "http://localhost:5005";

function EditPostPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { postId } = useParams(); 
  const navigate = useNavigate();  

  
 useEffect(() => {                             
    axios
      .get(`${API_URL}/api/post/${postId}`)
      .then((response) => {
        const onePost = response.data;
        setName(onePost.name);
        setDescription(onePost.description);
      })
      .catch((error) => console.log(error));
    
  }, [postId]);  


  const handleFormSubmit = (e) => {                 
    e.preventDefault();
    const requestBody = { name, description };
 
    axios
      .put(`${API_URL}/api/post/${postId}`, requestBody)
      .then(() => {
        navigate(`/post/${postId}`)
      });
  };
  
  const deletePost = () => {                   
    axios
      .delete(`${API_URL}/api/post/${postId}`)
      .then(() => {
        navigate("/post");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div className="container">
      <h3 className="edit_post">Edit the Post</h3>

      <form onSubmit={handleFormSubmit}> 
      <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
          <label>Title -></label>
           <input  type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
            className='input'
          ></input>
           
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
           
            </VStack>
            <Box>
            <label>Description -></label>
            <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='input'
        />

           
            </Box>
            <Box>
            
          
            </Box>
          </Stack>


          <Stack  alignItems="center" justifyContent={'center'} className="flex-btn">
          
          <Button
           as={'a'}
           href={"/post"}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
           Back to Post
          </Button>

          <input type="submit" class="btn" value="EDIT" />

          
       
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>



        
      </form>
      <button onClick={deletePost} className="btn delete">Delete</button>
    </div>
  );
}

export default EditPostPage;
