import { useNavigation } from '@react-navigation/native';
import { View,Text, Box, Center, ScrollView, VStack, FormControl, Input } from 'native-base'
import React from 'react'
import Buttone from './Components/Buttone';

const ShippingInput=[
  {
    label:"ENTER CITY",
    type:"text",
  },{
    label:"ENTER COUNTRY",
    type:"text",
  },{
    label:"ENTER POSTAL CODE",
    type:"text",
  },{
    label:"ENTER ADDRESS",
    type:"text",
  },
]

 function ShippingScreen() {
  const navigation=useNavigation();
  return (
    <Box flex={1} safeArea bg={"#5caee3"} py={5}>
      {/**Header */}
      <Center pb={15}>
    <Text color={'white'} fontSize={14} bold>
      DELIVERY ADDRESS
    </Text>
      </Center>
      {/**Input */}
      <Box h={'full'} bg='white' px={5}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
          <VStack space={6} mt={5}>
            {ShippingInput.map((i,index)=>(
               <FormControl key={index}>
               <FormControl.Label
                 _text={{
                   fontSize:"12px",
                   fontStyle:'bold',
                   color:'black'
                 }}
               >{i.label}</FormControl.Label>
               <Input borderWidth={.2} borderColor={'#5caee3'} py={4} color='black' fontSize={13}
               _focus={{
                 bg:'green.100',
                 borderWidth:1,
               }}
         
               />
             </FormControl>
            ))}
           <Buttone   onPress={()=>navigation.navigate('Checkout')} color={'white'} mt={5}>CONTINUE</Buttone>
          </VStack>
        </ScrollView>

      </Box>
    </Box>
  )
}
export default ShippingScreen;