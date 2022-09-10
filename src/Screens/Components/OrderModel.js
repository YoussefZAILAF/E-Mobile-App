import { useNavigation } from '@react-navigation/native'
import { Center, HStack, Modal ,VStack,Text,Button, Pressable,Image} from 'native-base'
import React, { useState } from 'react'
import Buttone from './Buttone'

const OrdersInfos=[
    {
        title:'Products',
        price:1999,
        color:'black'
    }, {
        title:'Shipping',
        price:34.00,
        color:'black'
    }, {
        title:'Tax',
        price:20.00,
        color:'black'
    }, {
        title:'Total Amount',
        price:2054,
        color:'#15e526'
    },
]
const OrderModel=()=> {

    const [showModel,setShowModel]=useState(false)
    const navigation=useNavigation();
  return (
    <Center>
        <Buttone onPress={() =>setShowModel(true)} bg='#5caee3'
        color={'white'}
        mt={5}
        >SHOW PAYMENT & TOTAL</Buttone>

        <Modal isOpen={showModel} onClose={()=>setShowModel(false)} size='lg'>
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton />
                <Modal.Header>Order</Modal.Header>
                <Modal.Body>
                    <VStack space={7} >
                        {OrdersInfos.map((i,index)=>(
                            <HStack key={index} alignItems={'center'} justifyContent='space-between'>
                            <Text fontWeight={'medium'}>{i.title}</Text>
                            <Text color={i.color} bold>{i.price} DH</Text>
                            </HStack>
                        ))}
                       
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Pressable w={'full'} justifyContent='center' bg={'#e4a200'}
                    h={45} onPress={()=>setShowModel(false)} rounded={5}
                    >
                    <Image alt='paypal' resizeMode='contain'  
                        w={'full'} h={45}
                        source={require("../../../assets/images/paypal.jpg")}
                        />
                    </Pressable>

                    <Button 
                    w={"full"} mt={2} flex={1} bg={'#5caee3'}  h={45} 
                    onPress={()=>{setShowModel(false)
                    navigation.navigate('Home')
                    
                    }}>
                        PAY LATER 
                    </Button>
                </Modal.Footer>
            </Modal.Content>

        </Modal>
    </Center>
  )
}

export default OrderModel