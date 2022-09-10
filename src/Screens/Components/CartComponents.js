import { Box ,HStack,Text,Pressable, Center,Image, VStack, Button} from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import products from '../../data/Products'
import {FontAwesome} from '@expo/vector-icons'
import Buttone from './Buttone'

const Swiper =()=>(
    <SwipeListView
     rightOpenValue={-50}
     previewRowKey='0'
     previewOpenValue={-40}
     previewOpenDelay={3000}
     data={products.slice(0,2)}
     renderItem={renderIterms}
     renderHiddenItem={HiddenItem}
     showsVerticalScrollIndicator={false}

    />
)

const  renderIterms=(data) =>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems={'center'} bg='white' shadow={1} rounded={10} overflow='hidden'>
                <Center w='25%' bg={"gray.100"}>
                   <Image source={{uri:data.item.image}} alt={data.item.name} w='full' h={24}
                   />
                </Center>

                <VStack
                w='60%' px={2} space={2}
                >
                    <Text  color={'black'} bold fontSize={12}>{data.item.name}</Text>
                    <Text  bold color={'black'}>{data.item.price} DH</Text>
                </VStack>
                <Center>
                    <Button 
                    bg={'#5caee3'}
                    _pressed={{bg:'#215ae7'}}
                    >5</Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
)
const  HiddenItem=() =>(
    <Pressable 
    w={50}
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h="88%"
    ml='auto' 
    justifyContent={'center'} 
    bg='#ff1100'>
        <Center alignItems={'center'} space={2}>
         <FontAwesome name='trash' color={'white'} size={24} />
        </Center>
    </Pressable>
)

function CartComponents() {
  return (
    <Box mr={6}>
        <Swiper/>
    </Box>
  )
}

export default CartComponents