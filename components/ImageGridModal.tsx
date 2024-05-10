import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, FlatList, Image, Text } from 'react-native';

interface ImageGridModalProps {
  visible: boolean;
  onClose: () => void;
  images: string[];
}

const ImageGridModal: React.FC<ImageGridModalProps> = ({ visible, onClose, images }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomVisible, setZoomVisible] = useState(false);

  const handleImagePress = (url: string) => {
    setZoomedImage(url);
    setZoomVisible(true);
  };

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
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Image style={styles.image} source={{ uri: item }} />
            </TouchableOpacity>
          )}
          numColumns={3} // Adjust number of columns here
          keyExtractor={(_, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </TouchableOpacity>
      </View>
      {zoomVisible && (
        <View style={styles.zoomContainer}>
          <TouchableOpacity style={styles.closeZoom} onPress={() => setZoomVisible(false)}>
            <Text style={styles.textStyle}>Close Zoom</Text>
          </TouchableOpacity>
          <Image style={styles.zoomedImage} source={{ uri: zoomedImage }} />
        </View>
      )}
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
  },
  zoomContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeZoom: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5,
  },
  zoomedImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain'
  }
});

export default ImageGridModal;
