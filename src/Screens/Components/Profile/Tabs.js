import { View,Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Order from './Order'
import Profile from './Profile'

const rendeScene=SceneMap({
  first:Profile,
  second:Order
})

function Tabs() {
  const layout =useWindowDimensions();
  const [index,setIndex]=useState(0);
  const [routes]=useState([
    {
      key:"first",title:"PROFILE"
    },{
      key:"second",title:"ORDER"
    }
  ]);

  const renderTabsBar=(props)=>(
    <TabBar {...props} tabStyle={styles.tabStyle} indicatorStyle={{backgroundColor:'black'}}
    activeColor='#5caee3' inactiveColor='white'
    renderLabel={({route,color})=>(
      <Text style={{color, ...styles.text}}>{route.title}</Text>
    )
   
  }
  />
  )
  
  return (
    <TabView navigationState={{index,routes}} 
    renderScene={rendeScene}
    onIndexChange={setIndex}
    initialLayout={{width:layout.width}}
    renderTabBar={renderTabsBar}

    />

    )
}

const styles=StyleSheet.create({
tabStyle:{
  backgroundColor:"black",
},
text:{
  fontSize:13,
  fontWeight:'bold'
}
})

export default Tabs