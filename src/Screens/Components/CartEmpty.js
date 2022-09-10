import { Box, Center ,Text} from 'native-base'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import Buttone from './Buttone'


function CartEmpty() {
  return (
    <Box flex={1} px={5}>
        <Center h={'90%'}>
            <Center
            w={200} h={200} bg={"white"} rounded='full'
            >
                <FontAwesome name='shopping-basket' size={64} color='#5caee3'  />

            </Center>
            <Text color={'#5caee3'}  bold mt={5}>Cart Is Empty</Text>
        </Center>

        <Buttone bg={'black'} color='white'>Start Shopping </Buttone>
    </Box>
  )
}

export default CartEmpty