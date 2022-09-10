import { View,Text, Box, Center, ScrollView, VStack, FormControl, Input, Image,HStack, Spacer } from 'native-base'
import React from 'react'
import Buttone from './Components/Buttone';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PaymentMethodes=[
  {
    image:require("../../assets/images/paypal.jpg"),
    alt:"paypal",
    icon:"Ionicons"
  }, 
]
 function PaymentScreen() {
  const navigation=useNavigation();
  return (
    <Box flex={1} safeArea bg={"#5caee3"} py={5}>
    {/**Header */}
    <Center pb={15}>
  <Text color={'white'} fontSize={14} bold>
    PAYMENT METHOD
  </Text>
    </Center>
    {/**Selection */}
    <Box h={'full'} bg='white' px={5}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <VStack space={6} mt={5}>
          {PaymentMethodes.map((i,index)=>(
            <HStack key={index} alignItems={'center'} bg='#e9f5f3' px={3} py={1} rounded={10} justifyContent="space-between">
                  
            <Box>
            <Image source={i.image} alt={i.alt} resizeMode='contain' 
              w={60} h={50} />
            </Box>
            <Ionicons name='md-checkmark-circle' size={32} color='green' />

          </HStack>
          ))}
        
      
         <Buttone color={'white'}   onPress={()=>navigation.navigate('Placeorder')} mt={5}>CONTINUE</Buttone>

         <Text italic textAlign={'center'}>Payment Method is <Text bold>"Paypal"</Text> by default</Text>
        </VStack>
      </ScrollView>

    </Box>
  </Box>
  )
}
export default PaymentScreen;