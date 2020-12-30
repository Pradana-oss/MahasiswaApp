import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob';
 

const options = {
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
  };

export default class UploadData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        avatarSource: null,
        pic: null,
      };
    }

    myfun = () => {
        
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image Picker Error: ', response.error);
          } else {
            let source = {uri: response.uri};
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source,
              pic: response.data,
            });
          }
        });
      };
    
      uploadPic = () => {
        // IP Adreess dan letak file up
        RNFetchBlob.fetch(
          'POST',
          'http://192.168.100.15/backend_CRUD_ReactNative/uploads',
          {
            Authorization: 'Bearer access-token',
            otherHeader: 'foo',
            'Content-Type': 'multipart/form-data',
          },
          [
            // name: image adalah nama properti dari api kita
            {name: 'image', filename: 'tempbody.jpg', data: this.state.pic},
          ],
        ).then((resp) => {
          console.log('Response Saya');
          console.log(resp.data);
          alert('your image uploaded successfully');
          this.setState({avatarSource: null});
        });
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>silahkan upload gambar</Text>
    
            <Image
              source={this.state.avatarSource}
              style={{width: '100%', height: 300, margin: 10}}
            />
    
            <TouchableOpacity
              style={{backgroundColor: 'orange', margin: 10, padding: 10}}
              onPress={this.myfun}>
              <Text style={{color: '#fff'}}>Pilih Image</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={this.uploadPic}>
              <Text>Upload</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
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