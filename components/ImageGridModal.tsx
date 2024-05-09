import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, FlatList, Image, Text } from 'react-native';

interface ImageGridModalProps {
  visible: boolean;
  onClose: () => void;
  images: string[];
}

const ImageGridModal: React.FC<ImageGridModalProps> = ({ visible, onClose, images }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <View style={styles.grid}>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
          numColumns={3} // Adjust number of columns here
          keyExtractor={(_, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
    margin: 2
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    margin: 20
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default ImageGridModal;
