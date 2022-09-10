import { Box, FormControl, ScrollView, View, VStack,Input } from 'native-base'
import React from 'react'
import Buttone from '../Buttone'

const Inputs=[
  {
    label:'USERNAME',
    type:"text",

  },  {
    label:'Email',
    type:"text",

  },  {
    label:'NEW PASSWORD',
    type:"password",

  }, {
    label:'CONFIRME PASSWORD',
    type:"password",

  },
]

function Profile() {
  return (
    <Box h={'full'} bg='white' px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i,index)=>(
              <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize:'12px',
                  fontWeight:'bold',
                }}
              >{i.label}</FormControl.Label>
              <Input 
              borderWidth={.5} bg={'#c9e8f4'} py={3} color={"black"} fontSize={15}
              borderColor="#008ec2"
              _focus={{
                bg:'#c9e8f4',
                borderColor:"#113948",
                borderWidth:1,
                shadow:2


              }}
              type={i.type}
              />
            </FormControl>
            ))
          }
        <Buttone bg={'#5caee3'} color='white'>UPDATE PROFILE</Buttone>
        </VStack>

      </ScrollView>
    </Box>
  )
}

export default Profile