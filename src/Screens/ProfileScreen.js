import { View,Text, Center ,Image, Heading} from 'native-base'
import React from 'react'
import Profile from '../../assets/images/Profile.png'
import Tabs from './Components/Profile/Tabs';
 function ProfileScreen() {
  return (
    <>
    <Center bg={'#5caee3'} pt={10} pb={6}>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/219/219983.png'}}  alt='profile' w={24} h={24} resizeMode='cover'/>
    
    <Heading bold fontSize={15} isTruncated my={2} color={'white'}>
      Youssef Zailaf
    </Heading>
    <Text italic fontSize={10} color='white'>joined Jun 15 2022</Text>
    
    </Center>
    <Tabs/>
    </>
    
    
  )
}
export default ProfileScreen;