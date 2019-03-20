import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet} from 'react-native';

export default class ImagesSource extends Component{  
	render(){
        console.log(this.props.imgsource)
	return (
        <Image source={this.props.imgsource} style={styles.image}></Image>
	);
	}
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:null,
        alignSelf:'stretch'
    }
})
