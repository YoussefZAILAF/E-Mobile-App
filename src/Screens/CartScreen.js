import { useNavigation } from '@react-navigation/native';
import { View,Text, Box, Center, ScrollView, HStack, Button } from 'native-base'
import React from 'react'
import Buttone from './Components/Buttone';
import CartComponents from './Components/CartComponents';
import CartEmpty from './Components/CartEmpty';

 function CartScreen() {
  const navigation=useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={'#dff4f0'}>
      <Center w={'full'} py={5}>
        <Text color={'black'} bold fontSize={20}>Cart</Text>
      </Center>
      {/**If Cart Empty 
      <CartEmpty/>*/}
      {/**Cart Items */}

      <ScrollView 
      showsHorizontalScrollIndicator={false}
      >
        <CartComponents/>
        <Center mt={5}>

          <HStack rounded={50}
            justifyContent='space-between'
            bg='white'
            shadow={2}
            w='90%'
            pl={5}
            h={45}
            alignItems='center'

          >
            <Text>Total</Text>
            <Button
            px={10}
            h={45}
            rounded={50}
            bg='#5caee3'

            >356</Button>
          </HStack>

        </Center>

        {/**checkout */}

        <Center px={5}>
          <Buttone bg={'black'} color='white' mt={10}   onPress={()=>navigation.navigate('Shipping')}>CHECKOUT</Buttone>

        </Center> 

      </ScrollView>


    </Box> 
  )
}
export default CartScreen;