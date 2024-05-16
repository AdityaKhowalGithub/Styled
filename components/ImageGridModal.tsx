import React, { useState, useEffect } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '@/services/firebaseconfig';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ImageGridModalProps {
  visible: boolean;
  onClose: () => void;
  images: string[];
}

const ImageGridModal: React.FC<ImageGridModalProps> = ({ visible, onClose, images }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [sustainabilityScore, setSustainabilityScore] = useState<string | null>(null);

  const handleImagePress = async (url: string) => {
    console.log("Image URL:", url); // Log the image URL
    setZoomedImage(url);
    setZoomVisible(true);

    // Fetch sustainability score from Firestore
    const user = auth.currentUser;
    if (!user) return;

    const firestore = getFirestore();
    const categories = ['dresses', 'outerwear', 'tops', 'shoes'];
    let found = false;

    // Extract and decode the file name from the URL without query parameters
    const fileNameWithQuery = url.substring(url.lastIndexOf('/') + 1);
    const fileName = decodeURIComponent(fileNameWithQuery.split('?')[0]);
    const nameName = fileName.split('/').pop();
    //console.log("namename", nameName);
    //console.log("Extracted File Name:", fileName); // Log the extracted file name

    for (const category of categories) {
      const categoryDoc = doc(firestore, `users/${user.uid}/clothes/${category}`);
      const categorySnapshot = await getDoc(categoryDoc);
      if (categorySnapshot.exists()) {
        const filePath = categorySnapshot.data().filePath;
        console.log("file path:", filePath);  
        console.log("File Name:", fileName); // Log the file name
        console.log(fileNameWithQuery);
        if (nameName && filePath[nameName]) {
          setSustainabilityScore(filePath[nameName]);
          console.log("Sustainability Score:", filePath[nameName]); // Log the sustainability score
          found = true;
          break;
        }
      }
    }

    if (!found) {
      setSustainabilityScore(null);
      console.log("Sustainability Score: Not found"); // Log if score is not found
    }
  };

  const getSustainabilityIcon = (score: string | null) => {
    if (score === 'thrift') {
      return <Icon name="smile-o" size={50} color="green" />;
    } else if (score === 'gift') {
      return <Icon name="meh-o" size={50} color="orange" />;
    } else if (score === 'bought') {
      return <Icon name="frown-o" size={50} color="red" />;
    }
    return null;
  };

  const getSustainabilityText = (score: string | null) => {
    if (score === 'thrift') {
      return 'Sustainability: Good (Thrifted)';
    } else if (score === 'gift') {
      return 'Sustainability: Neutral (Gifted)';
    } else if (score === 'bought') {
      return 'Sustainability: Bad (Bought)';
    }
    return 'Sustainability: Unknown';
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
          {sustainabilityScore && (
            <View style={styles.sustainabilityContainer}>
              {getSustainabilityIcon(sustainabilityScore)}
              <Text style={styles.sustainabilityText}>{getSustainabilityText(sustainabilityScore)}</Text>
            </View>
          )}
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
  },
  sustainabilityContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  sustainabilityText: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  }
});

export default ImageGridModal;
