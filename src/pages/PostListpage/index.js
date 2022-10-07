import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPost from "../../components/AddPost";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;


function PostListPage() {
  const [post, setPost] = useState([]);

  const getAllPost = () => {
    axios
      .get(`${API_URL}/post`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllPost();
  }, [] );

  
  return (
    <div className="">
    <a href="#postList" className="btn">View All Post</a>
       <AddPost refreshPost={getAllPost} />
    
        {post.map((post) => {
          return (
            <Center py={6} id={"postList"}>
      <Box
        maxW={'900px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
         <img src={post.imageUrl} w={'100%'} className="img-post-views"></img>
          
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
           {post.name}
          </Text>
         
          <Text color={'gray.500'}>
          {post.description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{post.author}</Text>
            <Text>{post.createdAt.substring(0,10)}</Text>
          </Stack>
        </Stack>
        <br></br>
        <Link to={`/post/${post._id}`} className="btn">link</Link>
      </Box>
    </Center>
          );
        })}     
       
    </div>
  );
}

export default PostListPage;