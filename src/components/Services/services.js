import React from 'react'
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';


const Services = () => {
  return (
    <div className='flex container'>
    <Center py={6} m={10}>
      <Box
       
        w={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
         
          <Stack direction={'row'} align={'center'} justify={'center'}>
 
            <Text fontSize={'4xl'} fontWeight={800}>
            What did you achieve??
            </Text>
          
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={2} py={2}>
        

          <Button
            mt={10}
            as={'a'}
            href={"/post"}
            w={'full'}
            bg={'#E80002'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: '#202020',
            }}
            _focus={{
              bg: '#E80012',
            }}>
           Create Post
          </Button>
        </Box>
      </Box>
    </Center>

    <Center py={6}  m={10}>
      <Box
       
        w={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
         
          <Stack direction={'row'} align={'center'} justify={'center'}>
 
            <Text fontSize={'4xl'} fontWeight={800}>
                Join and Share with us
            </Text>
          
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={2} py={2}>
        

          <Button
            mt={10}
            as={'a'}
            href={'/auth/signup'}
            w={'full'}
            bg={'#202020'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: '#E80002',
            }}
            _focus={{
              bg: '#E80012',
            }}>
          Sign Up
          </Button>
        </Box>
      </Box>
    </Center>

    <Center py={6}  m={10}>
      <Box
       
        w={'330px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
         
          <Stack direction={'row'} align={'center'} justify={'center'}>
 
            <Text fontSize={'4xl'} fontWeight={800}>
                Create your forum for doubts
            </Text>
          
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={2} py={2}>
        

          <Button
            mt={10}
            w={'full'}
            bg={'#E80002'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: '#202020',
            }}
            _focus={{
              bg: '#E80012',
            }}>
           Create Post
          </Button>
        </Box>
      </Box>
    </Center>
    </div>
  )
}

export default Services