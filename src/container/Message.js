import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';
import color from "../style/color"
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Message extends Component{
    state={
        pageAnimate:new Animated.Value(20)
    }
    startAnimate(){
        this.setState({
            pageAnimate:new Animated.Value(20)
        },()=>{
            Animated.timing(                  // 随时间变化而执行动画
                this.state.pageAnimate,            // 动画中的变量值
                {
                    toValue: 0,                   // 透明度最终变为1，即完全不透明
                    duration: 150,              // 让动画持续一段时间
                    easing: Easing.linear
                }
            ).start();
        })

    }
    componentDidMount(){
        this.startAnimate()
        this.props.navigation.addListener('didFocus',()=>{
            this.startAnimate()
        })
    }
    componentWillReceiveProps(nextProp){
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.welcome,{translateY:this.state.pageAnimate}]}>
                    Message
                </Animated.Text>
                <TouchableWithoutFeedback onPress={()=>this.startAnimate()}>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                </TouchableWithoutFeedback>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});