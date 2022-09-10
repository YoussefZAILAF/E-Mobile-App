import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'

function Order() {
  return (
    <Box h='full' bg={'white'} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {   /**Paid Order */}
        <Pressable>
          <HStack space={4} justifyContent='space-between' alignItems={"center"}
          bg={'#cfecf7'} py={5} px={2}
          >

          <Text fontSize={9}
          color='blue' isTruncated>
          5468766465
          </Text>
          <Text fontSize={12} bold isTruncated color={'black'}>PAID</Text>
          <Text fontSize={12} italic isTruncated color={'black'}>SEP 12 2022</Text>

          <Button
           px={7} py={1.5} rounded={50} 
           bg='#5caee3'
          _text={{
            fontWeight:'bold'
          }}
          _pressed={{
            bg:'#005777'
          }}
          >2000 DH</Button>

          </HStack>

        </Pressable>
        {   /** Not Paid Order */}
        <Pressable>
          <HStack space={4} justifyContent='space-between' alignItems={"center"}
          bg={'#f0ada9'} py={5} px={2} 
          >

          <Text fontSize={9}
          color='blue' isTruncated>
          3465465486
          </Text>
          <Text fontSize={12} bold isTruncated color={'black'}>NOT PAID</Text>
          <Text fontSize={12} italic isTruncated color={'black'}>SEP 17 2022</Text>

          <Button
           px={7} py={1.5} rounded={50} 
           bg='#d20a00'
          _text={{
            fontWeight:'bold'
          }}
          _pressed={{
            bg:'#005777'
          }}
          >1999 DH</Button>

          </HStack>

        </Pressable>
        
      </ScrollView>

    </Box>
  )
}

export default Order