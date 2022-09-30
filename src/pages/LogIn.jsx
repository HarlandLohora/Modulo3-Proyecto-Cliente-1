import React, { useState } from "react";
import './LogIn.css'
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <form onSubmit={handleFormSubmission} className="signup__form">
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                id="input-username"
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={handleInputChange}
                required
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
                  <Input
                  id="input-username"
                  type="email"
                  name="email"
                  placeholder="gmail@"
                  value={username}
                  onChange={handleInputChange}
                  required
                />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                id="input-password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                required
                minLength="8"
              />
            </FormControl>
            <FormControl id="error">
                  {error && (
                <div className="error-block">
                  <p>There was an error submiting the form:</p>
                  <p>{error.message}</p>
                </div>
              )}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} className="button__submit" type="submit">
                LogIn
              </Button>            
            </Stack>
            </form>
          </Stack>        
        </Box>
      </Stack>     
    </Flex>
    </div>
  );
}
