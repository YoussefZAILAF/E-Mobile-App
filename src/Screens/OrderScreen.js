import { View,Text, Box, ScrollView, Heading } from 'native-base'
import React from 'react'
import OrderInfo from './Components/OrderInfo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderItem from './Components/OrderItem';
import PlaceOrderModel from './Components/PlaceOrderModel';
import OrderModel from './Components/OrderModel';

 function OrderScreen() {
  return (
    <Box flex={1} bg='#e9f5f3' safeArea pt={6}>
      <Box>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <OrderInfo 
      title={"COSTUMOR"}
      sucess
      subTitle='Youssef Zailaf'
      text='youssef@gmail.com'
      icon={<FontAwesome name='user' size={30} color='white'/>}
      />
     <OrderInfo 
      title={"SHIPPING INFO"}
      danger
      subTitle='Shipping: Khouribga'
      text='Pay Methode:Paypal'
      icon={<FontAwesome5 name='shipping-fast' size={30} color='white'/>}
      />
      <OrderInfo 
      title={"DELIVER TO"}
      subTitle='Adress: Khouribga'
      text='hay nahda , N 5 bd dess alaouites'
      icon={<Ionicons name='location' size={30} color='white'/>}
      />
      </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>

        <Heading bold fontSize={15} isTruncated my={4}>PRODUCTS</Heading>
        <OrderItem/>
        <OrderModel/>
      </Box>

    </Box>

  );
}
export default OrderScreen;