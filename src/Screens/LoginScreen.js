import { Text, Box ,Image, Heading, VStack, Input, Button} from 'native-base'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import React from 'react'
import {  Pressable } from 'react-native';

 function LoginScreen({navigation}) {
  return (
    <Box flex={1}  bg={'white'}>
      <Image source={require("../../assets/background.jpg")}
        alt='logo'
        w={'full'}
        h={"full"}
      />
      <Box 
        w={"full"}
        h={"90%"}
        position="absolute"
        top="0"
        px="6"
        justifyContent={"center"}
      >
        <Heading color={'black'}>LOGIN</Heading>
        <VStack space={5} pt="6">
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
          type='password'
          />

        </VStack>
        <Button my={30} w='40%'rounded={50} 
        _pressed={{
          bg:'#5caee3'
        }}
        onPress={()=>navigation.navigate('Bottom')}
        >
          LOGIN
        </Button>

        <Pressable mt={4}         onPress={()=>navigation.navigate('Register')}
>
          <Text color={'#717070'} underline={'black'}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  )
}
export default LoginScreen; 