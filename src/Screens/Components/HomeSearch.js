import { Box, HStack,Input, Pressable } from 'native-base'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function HomeSearch() {
  const navigation=useNavigation()
  return (
    <HStack
     space={3}
     h={120}
     w="full"
     px={6}
     bg={'#5caee3'}
     alignItems="center"
     safeAreaTop
    >
      <Input 
      placeholder='Chisel,Pulvérisateur....' 
      w="85%" 
      bg="#ffff"
      type="search"
      h={12}
      fontSize={13}
      borderWidth={0}
      variant='filled'
      _focus={{
        bg:'#d9ebed'
      }}
      
      />
      <Pressable ml={3} onPress={()=>navigation.navigate('Cart')}>
        <FontAwesome5 name="shopping-basket" size={24} color='white'/>
        <Box
         px={1}
         rounded="full"
         position="absolute"
         top={-13}
         left={1.5}
         bg='#ff0000'
         _text={{
          color:'white',
          fontSize:"11px"
         }}
        >P</Box>
      </Pressable>

    </HStack>
  )
}

export default HomeSearch