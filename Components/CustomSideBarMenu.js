import React,{Component} from 'react';
import {View,StyleSheet,text,Image,TouchableOpacity,TextInput,Alert,Modal,KeyboardAvoidingViewComponent} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'

export default class customSideBarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <View style = {styles.DrawerItemsContainer}>
                    <DrawerItems{...this.props}/>
                </View>
                <View style = {styles.LogOutContainer}>
                <TouchableOpacity style = {styles.logOutButton}
                    onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
