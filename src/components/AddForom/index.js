import { useState } from "react";
import axios from "axios";
import './index.css'
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

function AddForom(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {   
    e.preventDefault();
 
    const requestBody = { title, description };
    axios
      .post(`${API_URL}/forom`, requestBody)
      .then((response) => {
        setTitle("");
        setDescription("");
        props.refreshForom(); 
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
    <p className="description-for">
In this section, users will choose a topic to deal with and will ask a question so that other people in the same area can resolve their doubts.</p>
 
    <form onSubmit={handleSubmit}>  
     
      <Flex
    minH={'100vh'}
    mx={-100}
    align={'center'}
    justify={'center'}
    py={12}
   >
    <Stack
      boxShadow={'2xl'}
      w={'900px'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      p={10}
      
      align={'center'}>
      <img src="../images/forom.png" className="AddPOst"></img>
      <Stack align={'center'} >
        <Heading
          textTransform={'uppercase'}
          fontSize={'3xl'}
          color={useColorModeValue('gray.800', 'gray.200')}>
         Add To Forom
        </Heading>
       
      </Stack>
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
     
        <Input
          type="text"
          name="title"
          value={title}
          placeholder={'Theme'}
          onChange={(e) => setTitle(e.target.value)}
          color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
        />

          <Input
           type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={'What is your question?'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
        e={(e) => setDescription(e.target.value)}
        
 
        <Button type="submit"
          bg={'#000'}
           rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: '#E80002' }}
            _focus={{ bg: '#E80002' }}>Submit</Button>
        </Stack>
      </Stack>
    </Flex>
        
 
        
       
      </form>


      
    </div>
  );
}

export default AddForom;
