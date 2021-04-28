import React,{Component} from 'react'
import{View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert,Morda,KeyboardAvoidingView} from 'react-native'
import db from '../config';
import firebase from 'firebase'
import MyHeader from '../Components/myheader'

export default class notificationScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title = "Notifications" navigation = {this.props.navigation}/>
                <View>
                    {
                        this.state.AllNotifications.lenght === 0
                        ?(
                            <View><Text>no notifications</Text></View>
                        )
                        :(
                            <SwipeableFlatList
                            AllNotifications = {this.state.AllNotifications}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}