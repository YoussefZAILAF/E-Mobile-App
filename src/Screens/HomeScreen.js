import { Box, NativeBaseProvider, Text } from "native-base";
import React from 'react'
import HomeSearch from "./Components/HomeSearch";
import HomeProduct from './Components/HomeProduct'


function HomeScreen() {
  return (
    <NativeBaseProvider>
    <Box flex={1} bg="#ffff" justifyContent={'center'} alignItems={'center'}>
    
      <HomeSearch />
      <HomeProduct />

    </Box>
  </NativeBaseProvider> 
  )
}
export default HomeScreen;