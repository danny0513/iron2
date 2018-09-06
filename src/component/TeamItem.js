import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableNativeFeedback
} from 'react-native';
import color from "../style/color"
import { Button,Avatar } from 'react-native-elements';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class TeamItem extends Component{
    render(){
        const styles=StyleSheet.create({
            itemContent:{
                flexDirection:'row',
                backgroundColor:'white',

                marginBottom:10
            },
            itemLeft:{
                flex:1,
                paddingTop:6,
                paddingBottom:6,
            },
            itemRight:{
                width:60
            },avatarContent:{
                flexDirection:'row',
                alignItems:'center',
                paddingTop:6,
                paddingBottom:6
            },
            avatarIcon:{
                paddingLeft:12
            },
            avatarName:{
                paddingLeft:12
            },avatarText:{
                color:color.primary_deep
            },avatarTimeText:{
                color:color.black_tint,
                fontSize:10
            },teamNum:{
                flex:1
            },
            teamNumText:{
                color:color.black,
                textAlign:'right',
                paddingRight:16,
                fontSize:14
            }  ,
            msg:{
                paddingLeft:24,
                paddingRight :16,
                paddingTop:6,
                paddingBottom:6
            },
            msgText:{
                fontSize:14,
                color:color.black_deep,
                lineHeight:24
            },require:{
                paddingLeft:24
            },
            requireText:{
                fontSize:12,
                color:color.black_tint
            },
            rightImage:{
                width:60,
                height:120
            }
        })
        return (
            <View style={styles.itemContent}>
                <View style={styles.itemLeft}>
                    <View style={styles.avatarContent}>
                        <View   style={styles.avatarIcon}>
                            <Avatar
                                rounded
                                source={require('../image/man.png')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                width={25}
                            />
                        </View>
                        <View style={styles.avatarName}>
                            <Text style={styles.avatarText}>#danniel.xie</Text>
                            <Text style={styles.avatarTimeText}>刚刚</Text>
                        </View>
                        <View style={styles.teamNum}>
                            <Text  style={styles.teamNumText}>1/4</Text>
                        </View>

                    </View>


                    <View style={styles.msg}>
                        <Text style={styles.msgText} numberOfLines={3}>"找个机友，一起刷灭灭子找个机友，一起刷灭灭子"</Text>
                    </View>
                    <View style={styles.require}>
                        <Text  style={[styles.requireText]}>必须:语音沟通</Text>
                    </View>
                    <View style={{flexDirection:'row',position:'absolute',bottom:6,left:0}}>

                        <View style={{ position:'absolute',right:16}}>

                            <Text  style={[styles.requireText]}>STEAM-怪物猎人:世界</Text>
                        </View>
                        <View style={{flex:1,paddingLeft:24}}>
                            <Text  style={[styles.requireText,{textAlign:'left',paddingRight:6}]}>今天 20：07</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.itemRight]}>
                    <View style={{ backgroundColor:'green'}}>
                        <TouchableNativeFeedback onPress={()=>this.props.showModal(true,'danny.xie')}>
                            <View style={{ backgroundColor:color.primary_deep,flex:1,justifyContent:'center',alignItems:'center',height:54}}><Text style={{color:'white'}}>JOIN</Text></View>
                        </TouchableNativeFeedback>
                    </View>
                    <View  >
                        <Image style={styles.rightImage} source={require('../image/monster_hunter_world.jpg')}/>
                    </View>



                </View>
            </View>
        )
    }
}