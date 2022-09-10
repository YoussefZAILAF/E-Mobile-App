
import { Text, Box ,Image, Heading, VStack, Input, Button} from 'native-base'
import { MaterialCommunityIcons,Ionicons,FontAwesome  } from '@expo/vector-icons';
import React from 'react'
import {  Pressable } from 'react-native';

 function RegisterScreen({navigation}) {
  return (
    <Box flex={1}  bg={'white'}>
    <Image source={require("../../assets/background.jpg")}
      alt='logo'
      w={'full'}
      h={"full"}
    />
    <Box 
      w={"full"}
      h={"100%"}
      position="absolute"
      top="0"
      px="6"
      justifyContent={"center"}
    >
      <Heading color={'black'}>SIGN UP</Heading>
      <VStack space={5} pt="6">
      <Input 
        InputLeftElement={<FontAwesome name="user" size={20} color="black" />}
        variant={'underlined'}
        placeholder='Name Lname'
        w={'70%'}
        pl='2'
        color={"black"}
        borderBottomColor={'black'}
        type='text'
        /> 
      <Input 
        InputLeftElement={<MaterialCommunityIcons name="email" size={20} color="black" />}
        variant={'underlined'}
        placeholder='your@gmail.com'
        w={'70%'}
        pl='2'
        color={"black"}
        borderBottomColor={'black'}
        keyboardType='email-address'
        /> 
        <Input 
        InputLeftElement={<Ionicons name="eye" size={24} color="black" />}
        variant={'underlined'}
        placeholder='******************'
        w={'70%'}
        pl='2'
        color={"black"}
        borderBottomColor={'black'}
        type='text'
        />

      </VStack>
      <Button my={30} w='40%'rounded={50} 
      _pressed={{
        bg:'#5caee3'
      }}
      onPress={()=>navigation.navigate('Bottom')}

      >
        SIGN UP
      </Button>

      <Pressable mt={4}         onPress={()=>navigation.navigate('Login')}
>
        <Text color={'#717070'} underline={'black'}>LOGIN</Text>
      </Pressable>
    </Box>
  </Box>
  )
}
export default RegisterScreen;