import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import Rating from './Rating'
import Message from './Notifications/Message'
import Buttone from './Buttone';

function Review() {
    const [rating,setRatings]=useState("");
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}>
        Review
        </Heading>
    {/** IF no Review
    <Message color={'#43c906'} children={'NO REVIEW'} bg='#efefef' bold/>*/}

    <Box p={3} bg='#b0ede3' mt={5} rounded={5} shadow='5'>
        <Heading fontSize={15} color={'black'}> User Doe</Heading>
        <Rating value={4}/>
        <Text mb={3}>FEB 24 2022</Text>
        <Message bg={'#b0ede3'} 
        color='black' size={12} 
        children="#e7d068 hex color red value is 231, green value is 208 and the blue value of its RGB is 104. Cylindrical-coordinate representations (also known as HSL) of color #" 
        />
    </Box>
    <Box mt={6}>
    <Heading fontSize={15} color='black' mb={4}>REVIEW THIS PRODUCT</Heading>
    <VStack space={6}>
        <FormControl>
            <FormControl.Label _text={
                {
                    fontSize:"12px",
                    fontWeight:'bold'
                
                }
            }>Rating</FormControl.Label>

            <Select bg={'green.50'} borderWidth={0} rounded={5} placeholder='choose rating' 
            _selectedItem={{
                bg:'amber.100',
                endIcon:<CheckIcon size={4}/>,
                justifyContent:"center",
                alignItems:'center'
                
            }}
            value={rating}
            onValueChange={(e)=>setRatings(e)}
            selectedValue={rating}
            >
                <Select.Item label='1 - Poor' value='1'/>
                <Select.Item label='2 - Fair' value='2'/>
                <Select.Item label='3 - Good' value='3'/>
            </Select>
            <FormControl.Label _text={
                {
                    fontSize:"12px",
                    fontWeight:'bold'
                
                }
            }>Commentaire</FormControl.Label>
            <TextArea h={20} w='full' placeholder='Tell us how u found about this product ...'
            borderWidth={0} py={4}
            />
        </FormControl>

        <Buttone color={'white'} >SUBMIT</Buttone>
        {/**    If not log in 
        <Message bg={'black'} 
        color='white' size={12} 
        children='please log in to review this product'
        />*/}
    </VStack>
    </Box>
    </Box>
  )
}

export default Review