import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableNativeFeedback,
    Modal,
    TouchableHighlight
} from 'react-native';
import color from "../style/color"
import { Button,Avatar } from 'react-native-elements';
import TeamItem from '../component/TeamItem'
import md from '../style/modal';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class Team extends Component{
    state={
        animationType: 'fade',//none slide fade
        modalVisible: false,//模态场景是否可见
        transparent: true,//是否透明显示
        modalTitleName:''
    }
    _setModalVisible = (visible,name) => {
        let obj={ modalVisible: visible}
        if(name){
            obj['modalTitleName']=name
        }
        this.setState(obj);
    }



    render() {
        return (
            <View style={[styles.container,{backgroundColor:color.bgc}]}>
                {/*<Button*/}
                    {/*icon={{name: 'squirrel', type: 'octicon'}}*/}
                    {/*buttonStyle={{backgroundColor:color.primary}}*/}
                    {/*loading={true}*/}
                    {/*title='BUTTON' />*/}
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._setModalVisible(false) } }
                >
                    <View style={md.content}>
                        <View style={md.body}>
                            <Text style={{color:color.black_deep}}>即将加入 #{this.state.modalTitleName} 的队伍</Text>
                            <Text style={{color:color.black_deep}}>请为你和你的队友负责</Text>


                            <View style={{flexDirection:'row',marginTop:24}}>
                                <View style={{flex:1}} >
                                    <Button small title={"否"} buttonStyle={{padding:6}} onPress={() => {
                                        this._setModalVisible(!this.state.modalVisible)
                                    }}/>
                                </View>
                                <View style={{flex:1}}>
                                    <Button small title={"是"}   buttonStyle={{backgroundColor:color.primary,padding:6}} onPress={() => {
                                        this._setModalVisible(!this.state.modalVisible)
                                    }}/>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
                <FlatList

                    data={[{key: 'a'},{key: 'a'},{key: 'a'},{key: 'a'},{key: 'a'},{key: 'a'}]}
                    renderItem={({item}) => <TeamItem item={item} showModal={this._setModalVisible.bind(this)}/>}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {


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