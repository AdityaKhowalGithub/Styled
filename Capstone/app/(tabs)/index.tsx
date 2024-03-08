
import EditScreenInfo from '@/components/EditScreenInfo';

import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Alert, Button, Modal, Pressable, TextInput } from 'react-native';


export default function TabOneScreen() {
  const [feedData, setPostData] = useState({
    user: '',
		profilePicUri: '',
    communityName: '',
    postImageUri: '',
    caption: '',
  });

	const [modalVisible, setModalVisible] = useState(false);

	const [text, onChangeText] = React.useState('');


	var [ isPress, setIsPress ] = React.useState(false);
	var touchProps = {
    activeOpacity: 1,
    underlayColor: 'red',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };

  useEffect(() => {
    // Dummy data for the feed
    const dummyData1 = {
        user: 'Chris Tiller',
				profilePicUri: '../assets/images/christillerpfp.png',
        communityName: 'Y2K mix',
        postImageUri: '../assets/images/postpic.png',
        caption: 'Suggestions on shoes that match?',
    };
    
    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setPostData(dummyData1);
    }, 1000);
  });

  if (!feedData.user) {
    return <Text>Loading...</Text>;
  }

  return (
		<ScrollView style={styles.container}>
			
			<View style={styles.headerContainer}>
				<Text style={styles.headerSwitch}>Activity</Text>
			</View>
      <View style={styles.postContainer}>
				<Image
          style={styles.profileImage}
          source={{ uri: feedData.profilePicUri }}
        />
        <Text style={styles.postText}>
					<Text style={styles.name}>{feedData.user} posts in {feedData.communityName}</Text>
				</Text>
				<Image
					style={styles.postImage}
					source={{ uri: feedData.postImageUri }}
				/>
				<TouchableHighlight {...touchProps}>
        	<Text>Like</Text>
      	</TouchableHighlight>
				<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.headerContainer}>Comments</Text>
						<TextInput
							style={styles.input}
							onChangeText={onChangeText}
							value={text}
							placeholder="Leave a Comment"
        		/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Comment</Text>
      </Pressable>
				<Text style={styles.postText}>
					<Text style={styles.name}>{feedData.caption}</Text>
				</Text>
      </View>

      <View style={styles.postContainer}>
				<Image
          style={styles.profileImage}
          source={{ uri: feedData.profilePicUri }}
        />
        <Text style={styles.postText}>
					<Text style={styles.name}>{feedData.user} posts in {feedData.communityName}</Text>
				</Text>
				<Image
					style={styles.postImage}
					source={{ uri: feedData.postImageUri }}
				/>
				<TouchableHighlight {...touchProps}>
        	<Text>Like</Text>
      	</TouchableHighlight>
				<Button
        title="Comment"
        onPress={() => Alert.alert('Simple Button pressed')}
      	/>
				<Text style={styles.postText}>
					<Text style={styles.name}>{feedData.caption}</Text>
				</Text>
      </View>

      <View style={styles.postContainer}>
				<Image
          style={styles.profileImage}
          source={{ uri: feedData.profilePicUri }}
        />
        <Text style={styles.postText}>
					<Text style={styles.name}>{feedData.user} posts in {feedData.communityName}</Text>
				</Text>
				<Image
					style={styles.postImage}
					source={{ uri: feedData.postImageUri }}
				/>
				<TouchableHighlight {...touchProps}>
        	<Text>Like</Text>
      	</TouchableHighlight>
				<Button
        title="Comment"
        onPress={() => Alert.alert('Simple Button pressed')}
      	/>
				<Text style={styles.postText}>
					<Text style={styles.name}>{feedData.caption}</Text>
				</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
	headerSwitch: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#333',
	},
  profileImage: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: 'grey',
  },
  postContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
	postText: {
		fontSize: 24,
		color: 'black',
	},
	postImage: {
		width: 150,
		height: 150,
		borderRadius: 50,
		marginBottom: 10,
	},
	icon: {
		width: 8,
		height: 8,
		marginBottom: 10,
	},
	btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
	centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
	input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
