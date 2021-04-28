import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert,Modal,KeyboardAvoidingViewComponent, FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase'
import MyHeader from '../Components/myheader'

export default class MyRecievedItems extends React.Component{
    constructor(){
        super()
        this.state = {
            userId:firebase.auth().currentUser.email,
            recieveBookList:[],
        }
        this.RequestRef = null
    }

    getRecieveBookList = () => {
        this.RequestRef = db.collection("request_items").where("user_id",'==',this.state.userId)
        .where("item_status",'==',"recieved")
        .onSnapshot((snapshot)=>{
            var bookList= snapshot.docs.math((doc)=>{
                doc.data()
            })
            this.setState({
                recievedBookList:bookList
            })
        })
    }
    render(){
        return(
            <View>
                <MyHeader title = "RecievedBooks" navigation = {this.props.navigation}/>
                <View>
                    {
                        this.state.recievedBooks.lenght === 0
                        ?
                        (
                            <View><Text>list all recieved books</Text></View>
                        )
                        :(
                            <FlatList
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.RecievedBooks}
                            renderItem = {this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}
