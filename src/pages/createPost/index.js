import React from 'react'

import {
    FormControl,
    Input,
    Textarea,
    Button,
  } from '@chakra-ui/react'

const CreatePost = () => {
  return (
    <div className='container'>
        <h1>Create Post</h1>
     <form>
         <FormControl> <Input placeholder='Title..' /></FormControl>       
         <FormControl><Input placeholder="Select Date and Time" size="md" type="datetime-local"/></FormControl>
         <FormControl><Textarea placeholder='Here is a sample placeholder' />   </FormControl> 
         <Button colorScheme='cyan'>Create</Button>
    </form> 
    </div>
  )
}

export default CreatePost