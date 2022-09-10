import React from 'react'
import { Box, Center, FlatList, HStack, Pressable,Image, VStack,Text, Button } from 'native-base'
import products from '../../data/Products'
import PlaceOrderModel from './PlaceOrderModel'

const  OrderItem=()=> {
  return (
    <FlatList showsVerticalScrollIndicator={false} data={products.slice(0,3)} 
    keyExtractor={(item)=>item._id}
    renderItem={({item})=>
        <Pressable>
        <Box mb={3}>
            <HStack alignItems={'center'} bg={'white'} shadow={1} rounded={10} overflow='hidden'>
                <Center w='25%' >
                    <Image source={{uri:item.image}} alt={item.name} w="full" h={24}
                    />

                </Center>
                <VStack w={'60%'} px={2}>
                <Text isTruncated color={'black'} bold fontSize={14}>
                        {item.name}
                    </Text>   
                    <Text isTruncated color={'black'} mt={2} bold>
                        {item.price} DH
                    </Text>
                </VStack>
                <Center>
                    <Button bg={'#5caee3'}
                    _pressed={{
                        bg:'#5caee3'
                    }}


                    >5</Button>
                </Center>
            </HStack>
        </Box>
         </Pressable>
    }
    />
  )
}

export default OrderItem