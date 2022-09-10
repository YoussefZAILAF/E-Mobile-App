import { Center, Heading ,Text} from 'native-base'
import React from 'react'

const OrderInfo=({icon,title,subTitle,text,sucess,danger})=> {
  return (
    <Center 
    bg={'white'} 
    w={200}
    h={200}
    py={2}
    rounded={10}
    shadow={4} 
    mb={2} 
    ml={5}
    mr={1}
    px={4}>
        <Center bg={"#5caee3"} w={60} h={60} rounded='full'>
            {icon}
        </Center>
        <Heading bold fontSize={12} isTruncated mt={3} mb={2}
        color='black'
        >{title}</Heading>

        <Text fontSize={13} color='black' >{subTitle}</Text>
        <Text fontSize={13} textAlign='center' italic color='black' >{text}</Text>
        {/**Status */}

        {sucess && (
            <Center py={2} mt={2} rounded={5} w='full' bg={'#00246b'}>
                <Text fontSize={12} color='white' >Paid on jun 21 2022</Text>
            </Center>
        )}    
        {danger && (
            <Center py={2} mt={2} rounded={5} w='full' bg={'#f44336'}>
                <Text fontSize={12} color='white' >Not Deliver</Text>
            </Center>
        )}
    </Center>
  )
}

export default OrderInfo