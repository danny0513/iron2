import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    Easing
} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcons from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import color from "./style/color"
import {BoxShadow} from 'react-native-shadow'
import Team from "./container/Team";
import Message from "./container/Message";
import Person from "./container/Person";
import {createStackNavigator} from "react-navigation";

let {width,height} = Dimensions.get("window");
const TabBarComponent = (props) => ( <BottomTabBar {...props} >  </BottomTabBar>);
const shadowOpt = {
    width:width,
    height:40,
    color:"#000",
    border:5,
    radius:1,
    opacity:0.1,
    x:0,
    y:0,
    style:{  }
}

export default class Router extends Component{
    state={
        '组队动画': new Animated.Value(1),
        '消息动画': new Animated.Value(1),
        '你动画': new Animated.Value(1),
        route:{
            组队:createStackNavigator({
                Team: Team,
            },{
                headerMode :'screen',
                navigationOptions: ({ navigation }) => ({
                    headerTitle: <Text style={{fontSize:20,fontWeight:'bold',color:'rgba(0,0,0,0.9)',textAlign:'center',flex:1}}>Ir<Text style={{color:color.primary}}>o</Text>n</Text>,
                    headerStyle:{height:40}
                }),
            }) ,
            消息:Message,
            你:Person
        }
    }
    clickAnim=(routeName)=>{
        console.log(routeName)
        Animated.sequence([
            Animated.timing(                  // 随时间变化而执行动画
                this.state[routeName+'动画'],            // 动画中的变量值
                {
                    toValue: 0.6,                   // 透明度最终变为1，即完全不透明
                    duration: 150,              // 让动画持续一段时间
                    easing: Easing.linear
                }
            ),
            Animated.timing(                  // 随时间变化而执行动画
                this.state[routeName+'动画'],            // 动画中的变量值
                {
                    toValue: 1.2,                   // 透明度最终变为1，即完全不透明
                    duration: 150,              // 让动画持续一段时间
                    easing: Easing.linear
                }
            ),
            Animated.timing(                  // 随时间变化而执行动画
                this.state[routeName+'动画'],            // 动画中的变量值
                {
                    toValue: 1,                   // 透明度最终变为1，即完全不透明
                    duration: 150,              // 让动画持续一段时间
                    easing: Easing.linear
                }
            )
        ])
         .start();
    }
    render(){
        const styles = StyleSheet.create({
            icon_conent:{
                position:'relative',
                width:24,
                height:24
            },
            icon_icon:{
                position:'absolute',
                zIndex:1,
                left:0,
                top:0
            },
            icon_icon2:{
                position:'absolute',
                zIndex:1,
                left:0,
                top:0,
                marginTop:2
            },
            icon_active: {
                width: 14,
                height:14,
                backgroundColor:color.primary,
                position:'absolute',
                right:0,
                bottom:0,
                zIndex:0,
                borderRadius:12,
            }
        });
        const ButtomNavigator=createBottomTabNavigator(this.state.route,{
            navigationOptions: ({ navigation }) => ({

                tabBarIcon: ({ focused, tintColor }) => {

                    const { routeName } = navigation.state;
                    let icon;
                    if(routeName=='组队'){
                        icon=<Animated.View style={[styles.icon_icon,{
                                                                        transform:[{
                                                                            scale:this.state['组队动画']
                                                                        }]
                                                                     }
                                                    ]}>
                            <EIcon   name={'slideshare'} size={22} color={tintColor} />
                            </Animated.View>
                    }else if(routeName=='你'){
                        icon=<Animated.View style={[styles.icon_icon,{
                                                                        transform:[{
                                                                            scale:this.state['你动画']
                                                                        }]
                                                                    }
                        ]}>
                                <MIcons   name={'pig'} size={22} color={tintColor} />
                            </Animated.View>
                     }else if(routeName=='消息'){
                        icon=<Animated.View style={[styles.icon_icon,{
                                                                        transform:[{
                                                                            scale:this.state['消息动画']
                                                                        }]
                                                                    }

                            ]}>
                                <FIcons   name={'message-square'} size={22} color={tintColor} />
                            </Animated.View>
                    }

                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <View style={styles.icon_conent}>

                        {icon}
                        {focused?<Text style={styles.icon_active}/>:<Text/>}
                    </View>;
                },tabBarOnPress:({ navigation, defaultHandler }) => {
                    console.log(navigation)
                    this.clickAnim(navigation.state.routeName)
                    defaultHandler()
                }
            }),
            tabBarComponent: props =>

                <BoxShadow setting={shadowOpt}  >
                    <TabBarComponent
                        {...props}
                        style={{height:40,marginBottom:0,backgroundColor:'white'}}
                    />
                </BoxShadow> ,
            tabBarOptions: {
                activeTintColor: color.black,
                inactiveTintColor: color.black,

                labelStyle: {
                    fontSize: 10,
                    marginBottom:0,
                    alignItems:'center'
                }
            }
        });
        return <ButtomNavigator/>
    }
}

