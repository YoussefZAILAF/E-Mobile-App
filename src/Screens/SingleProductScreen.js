import { Box, Heading, HStack, Image, NativeBaseProvider, NumberInput, ScrollView, Spacer, Text } from "native-base";
import React, { useState } from 'react'
import Rating from "./Components/Rating";
import NumericInput from "react-native-numeric-input"
import Buttone from "./Components/Buttone";
import Review from "./Components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({route}) {

  const [value,setValue]=useState(0);
  const navigation=useNavigation();
  const product=route.params
  return (
    <NativeBaseProvider>
    <Box safeArea flex={1} bg="#ffff" >
    <ScrollView px={5} showsVerticalScrollIndicator={false}> 
    <Image 
    source={{uri:product.image}}
    alt='image'
    w='full'
    h={300}
    resizeMode='contain'
    />

    <Heading bold fontSize={15}>
      {product.name}
    </Heading>

    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>

    <HStack space={2} alignItems='center' my={5}>
    <NumericInput minValue={1} totalWidth={140} totalHeight={30} iconSize={25}  maxValue={product.countInStock} 
    borderColor='#efefef' rounded iconStyle={{color:'white'}} 
    textColor={'black'} step={1}
    rightButtonBackgroundColor='#0ce12f'
    leftButtonBackgroundColor={'#e93232'}
    initValue={1}
    />
    <Spacer/>
    <Heading bold color={'black'} fontSize={19}>400 DH</Heading>
    </HStack>
    <Text lineHeight={24} fontSize={15} >{product.description}</Text>
    <Buttone bg={'#43c906'} mt={10} color='white'   onPress={()=>navigation.navigate('Cart')}>ADD TO CART</Buttone>

    <Review/>
    </ScrollView>
    </Box>
  </NativeBaseProvider>
  ) 
}
export default SingleProductScreen;