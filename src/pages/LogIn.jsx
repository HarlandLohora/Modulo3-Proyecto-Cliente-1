import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import "./auth.css"
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
    <div className="login-form">
         <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
   
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={'white'}>Sign in to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

    <form onSubmit={handleFormSubmission} className="signup__form" marginTop={'100'}>
      <label htmlFor="input-username">Username</label>
      <Input
        id="input-username"
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="input-password">Password</label>
      <Input
        id="input-password"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleInputChange}
        required
        minLength="8"
        className="pass"
      />

      {error && (
        <div className="error-block">
          <p>There was an error submiting the form:</p>
          <p>{error.message}</p>
        </div>
      )}

      <button className="btn submit" type="submit">
      <div class="icono">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
					  </svg>
				</div>
        <span>Submit</span>
      </button>
    </form>
    </Stack>        
        </Box>
      </Stack>     
    </Flex>
  </div>
  );
}
