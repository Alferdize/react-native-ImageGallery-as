import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  View,
  PermissionsAndroid,
  PanResponder,
  Share,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import ImageElement from './src/ImageElement';
import Icon from 'react-native-vector-icons/Feather';
export default class ImageGallery extends Component {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false,
      key: 0,
      total: 0,
      swap: 0,
      moveX: 0,
      modalImage: '',
      images: this.props.images,
      modaltitle:'',
      title:this.props.title,
    };
    this._panResponder = PanResponder.create ({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        var {swap} = this.state;
        if (swap == 0) {
          this.setState ({
            swap: 1,
            moveX: gestureState.moveX,
          });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        const {moveX, key, total} = this.state;
        if (gestureState.moveX - moveX > 60) {
          if (key != 0) {
            this.setState ({
              modalImage: this.state.images[key - 1],
              modaltitle:this.state.title[key - 1],
              key: key - 1,
            });
          }
        } else if (gestureState.moveX - moveX < -60) {
          if (key != total - 1) {
            this.setState ({
              modalImage: this.state.images[key + 1],
              modaltitle:this.state.title[key + 1],
              key: key + 1,
            });
          }
        }
        this.setState ({
          swap: 0,
        });
      },
    });
  }
  // setting image to modal image
  setModalVisible (visible, imageKey) {
    this.setState ({
      modalImage: this.state.images[imageKey],
      modaltitle:this.state.title[imageKey],
      key: imageKey,
      total: this.state.images.length,
    });
    this.setState ({
      modalVisible: visible,
    });
  }
  
  getImage () {
    return this.state.modalImage;
  }
   

  render () {
    var image = this.state.modalImage;
    let images = this.state.images.map ((val, key) => {
      return (
        <TouchableOpacity
          key={key}
          onPress={() => {
            this.setModalVisible (true, key);
          }}
        >
          <View style={styles.imageWrap}>
            <ImageElement imgsource={val.source} />
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <ScrollView>
        <View style={styles.container}>

          <Modal
            style={styles.modal}
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
          >
            <View style={styles.modalimage} {...this._panResponder.panHandlers}>
              <Text style={styles.textstyle}>
                {this.state.key + 1}/{this.state.total}
              </Text>
              <View style={styles.icon}>
              <TouchableWithoutFeedback
              onPress={() => {
                  this.setModalVisible (false,this.state.key);
                }}
              >
              <Icon
                name="x-circle"
                size={25}
                style={{color:"white"}}
              />
              </TouchableWithoutFeedback>
              </View>
              <ImageElement imgsource={image.source} />
              {
                this.props.title != undefined
                ?
                <View style={styles.options}>
              <Text style={this.props.titlestyle}>
                {this.state.modaltitle}
              </Text>
              </View>
                :
                null
              }
              </View>
          </Modal>
          {images}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  imageWrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get ('window').height / 3 - 12,
    width: Dimensions.get ('window').width / 2 - 4,
    backgroundColor: '#fff',
  },
  modalimage: {
    height: Dimensions.get ('window').height,
    width: Dimensions.get ('window').width,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '25%',
    paddingBottom: '25%',
    backgroundColor: 'rgba(0,0,0, 0.9)',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.9)',
  },
  icon: {
    color: 'white',
    alignSelf: 'flex-end',
    top: 25,
    right: 10,
    position: 'absolute',
  },
  textstyle: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
    marginRight: 15,
    position: 'absolute',
    fontSize: 20,
  },
  options: {
    flex:1,
    alignSelf:"center",
    bottom:'30%',
    position: 'absolute',
    flex:1,
  },
  downloadIcon:{
    borderWidth: 1,
    borderColor: 'white',
    color:"white",
    padding: 10,
    borderRadius: 50 / 10,
    alignSelf:"flex-start"
  },
  ShareIcon:{
    borderWidth: 1,
    borderColor: 'white',
    color:"white",
    padding: 10,
    borderRadius: 50 / 10,
    alignSelf:"flex-end"
  }
});

