import { Box, Center, NativeBaseProvider, StatusBar, Text,Image, VStack, Button } from "native-base";
import React from 'react'
import Buttone from "./Components/Buttone";
import LoginScreen from "./LoginScreen";

function NoteVerifyScreen() {
  return (
    <NativeBaseProvider>
    <Box flex={1} bg="#5caee3"  safeAreaTop>
      <Center w={'full'} h={250}>
        <Image 
         source={require("../../assets/favicon.png")}
         alt='Logo'
         size={'lg'}
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
      <Buttone bg={'#001e67'} color='white'>REGISTER</Buttone>
      <Buttone bg={'white'} color='#001e67'>LOG IN</Buttone>
      </VStack>
    </Box>
  </NativeBaseProvider>
  )
}
export default NoteVerifyScreen;