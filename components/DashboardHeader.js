import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import styles from '../styles/components/DashboardHeader'
const DashboardHeader = (props) => {



  return (
    <View style={styles.DashboardHeader_container}>



      <Text style={styles.Name} >Farm Fresh</Text>
      <View style={styles.ButtonContainer}>

        <View style={styles.addsButton}>
          <TouchableOpacity onPress={props.add}>
            <Text style={props.TextButton}>My ads</Text>
            <Text style={props.underline}></Text>
          </TouchableOpacity>

        </View>

        <View style={styles.icon}>
          <Avatar
            rounded
            source={{
              uri: props.uri
            }}
            size={45}
            onPress={props.onPress}

          />
        </View>


        <View style={styles.DuesButton}>
          <TouchableOpacity onPress={props.due}>
            <Text style={props.TextButtonTwo}>My dues</Text>
            <Text style={props.underlineTwo}></Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

export default DashboardHeader


