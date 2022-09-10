import { useNavigation } from '@react-navigation/native'
import { Center, HStack, Modal ,VStack,Text,Button} from 'native-base'
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
const PlaceOrderModel=()=> {

    const [showModel,setShowModel]=useState(false);
    const navigation=useNavigation();
  return (
    <Center>
        <Buttone onPress={() =>setShowModel(true)} bg='black'
        color={'white'}
        mt={5}
        >SHOW TOTAL</Buttone>

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
                    <Button flex={1} bg={'#5caee3'}  h={45} onPress={
                        ()=>{setShowModel(false)
                        navigation.navigate('order')}
                        
                    }>
                        PLACE AN ORDER 
                    </Button>
                </Modal.Footer>
            </Modal.Content>

        </Modal>
    </Center>
  )
}

export default PlaceOrderModel