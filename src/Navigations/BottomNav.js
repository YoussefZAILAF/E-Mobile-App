import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Center, Pressable, Text } from 'native-base'
import HomeScreen from '../Screens/HomeScreen'
import { StyleSheet } from 'react-native'
import { Entypo,AntDesign,FontAwesome,FontAwesome5 ,MaterialCommunityIcons} from '@expo/vector-icons';
import ProfileScreen from '../Screens/ProfileScreen'
import CartScreen from '../Screens/CartScreen'
import StackNav from './StackNav'

const Tab=createBottomTabNavigator()
const CostumTab=({children,onPress})=>(
    <Pressable onPress={onPress} h={70} w={70} rounded='full' bg={'#5caee3'} 
    top={-30} shadow={2} 

    >
        {children}
    </Pressable>

)
const BottomNav=()=> {
  return (
    <Tab.Navigator
    backBehavior='Main'
    initialRouteName='Main'
    screenOptions={
        {
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true,
        }}>
            <Tab.Screen name='Main' component={StackNav} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                    {focused ? (
                        <Entypo name="home" size={24} color='#5caee3'/>
                    ):(
                        <AntDesign name='home' size={24} color='#5caee3'/>
                    )
                    }
                    </Center>
                ),
            }}
        />  
        <Tab.Screen name='Cart' component={CartScreen} options={{
            tabBarButton:(props)=><CostumTab {...props}/>,
            tabBarIcon:({focused})=>(
                <Center>
                {focused ? (
                    <FontAwesome5 name="shopping-basket" size={24} color='#ffffff'/>
                ):(
                    <MaterialCommunityIcons name='shopping-outline' size={24} color='#ffffff'/>
                )
                }
                </Center>
            ),
        }}
    />
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarIcon:({focused})=>(
                    <Center>
                    {focused ? (
                        <FontAwesome name="user" size={24} color='#5caee3'/>
                    ):(
                        <AntDesign name='user' size={24} color='#5caee3'/>
                    )
                    }
                    </Center>
                ),
            }}
        />

    </Tab.Navigator>
  )
}

const styles=StyleSheet.create(
    {
        tab:{
            elevation:0,
            backgroundColor:'white',
            height:60,
        }
    }
)

export default BottomNav