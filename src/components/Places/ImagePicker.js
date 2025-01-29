import React from 'react';
import { Button, Text, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const ImagePicker = () => {
  const handlerImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    try {
      const result = await launchCamera(options);
      
      if (result.didCancel) {
        console.log('User cancelled camera');
        return;
      }

      if (result.errorCode) {
        console.log('Camera Error: ', result.errorMessage);
        return;
      }

      // Get image path from result
      if (result.assets && result.assets[0]) {
        const imagePath = result.assets[0].uri;
        console.log('Image captured:', imagePath);
        // You can use the imagePath here
      }
      
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View>
      <Text>ImagePicker</Text>
      <Button title="Take image" onPress={handlerImage} />
    </View>
  );
};

export default ImagePicker;
