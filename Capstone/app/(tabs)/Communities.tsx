import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, TextInput, Alert, Modal, Pressable } from 'react-native';
import UploadImage from '@/components/UploadImage'

const CommunitiesScreen = ({}) => {
	
  // State to store post data
  const [communityData, setCommunityData] = useState({
		communityName: '',
    memberCount: '',
    communityBio: '',
    communityLead: '',
  });

  const [postData, setPostData] = useState({
    user: '',
    communityName: '',
    caption: '',
  });

  const IMAGES: {[key: string]: any} = {
    "seattlevintage": require("@/assets/images/seattlevintagepfp.png"),
    "christiller": require("@/assets/images/christillerpfp.png"),
    "post": require("@/assets/images/postpic.png")
  }

	const [communityVisible, setCommunityVisible] = useState(false);
  const [postVisible, setPostVisible] = useState(false);

  const [text, onChangeText] = React.useState('');
	
  useEffect(() => {
    // Dummy data for the feed
    const dummyData1 = {
        communityName: 'Seattle Vintage Collect',
        memberCount: '1,031 members',
        communityBio: 'Find new fashion inspiration and share your unique style with others.',
        communityLead: 'jenniferlovespink'
      };

    const dummyPostData = {
      user: 'Chris Tiller',
      communityName: 'Y2K mix',
      caption: 'Suggestions on shoes that match?',
    };
    
    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setCommunityData(dummyData1);
      setPostData(dummyPostData);
    }, 1000);
  });

  if (!communityData.communityName) {
    return <Text>Loading...</Text>;
  }

  return (
		<ScrollView style={styles.container}>
			
			<View style={styles.headerContainer}>
				<Text style={styles.categories}>Communities for you</Text>
			</View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Modal
            animationType="slide"
            transparent={false}
            visible={communityVisible}
            onRequestClose={() => {
              setCommunityVisible(!communityVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                
                <ScrollView>
                  <View style={styles.headerContainer}>
                    <Text style={styles.header}>{communityData.communityName}</Text>
                  </View>
                  <View style={styles.spacer}></View>
                  <View style={styles.communityHead}>
                    <Image
                      style={{                         
                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginBottom: 10,
                        marginRight: 10,
                        alignContent: 'flex-start'
                      }}
                      source={ IMAGES["seattlevintage"] }
                    />
                    <Text style={styles.name}>Community Lead {"\n"}@{communityData.communityLead}</Text>
                  </View>
                    <Text style={styles.postText}>{communityData.communityBio}</Text>
                    <Text style={styles.policy}>Community Policy</Text>
                    
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      onPress={() => setPostVisible(true)}>
                      <Text style={styles.textStyle}>Add Post</Text>
                    </Pressable>
                              
                  <View style={styles.postContainer}>
                    <View style={styles.communityHead}>
                      <Image
                        style={styles.profileImage}
                        source={IMAGES["christiller"]}
                      />
                      <Text style={styles.postText}>
                        <Text style={styles.name}>{postData.user}</Text>
                      </Text>
                    </View>
                      <Image
                        style={styles.postImage}
                        source={IMAGES["post"]}
                      />
                      <Text style={styles.postText}>
                        {postData.caption}
                      </Text>
                  </View>
                </ScrollView>

                
                <TouchableHighlight
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setCommunityVisible(!communityVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
			  
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>
        
				
      </View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>	
      </View>
      <View style={styles.headerContainer}>
				<Text style={styles.categories}>Top in Seattle</Text>
			</View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>	
      </View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>	
      </View>
      <View style={styles.headerContainer}>
				<Text style={styles.categories}>Top in USA</Text>
			</View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>	
      </View>
      <View style={styles.communityContainer}>
        <View style={styles.communityHead}>
          <Image
          style={styles.profileImage}
          source={ IMAGES["seattlevintage"] }
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{communityData.communityName}</Text>
          </Text>
          <Pressable
            style={[styles.joinButton, styles.buttonOpen]}
            onPress={() => setCommunityVisible(true)}>
            <Text style={styles.textStyle}>Join</Text>
          </Pressable>
        </View>
        <Text style={{
          alignContent: 'center'
        }}>{communityData.memberCount}
        </Text>
        <Text style={styles.postText}>{communityData.communityBio}</Text>	
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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#333',
    marginTop: 25,
	},
  categories: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#333',
    margin: 10,
	},
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
    marginRight: 10,
    alignContent: 'flex-start'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 16,
    color: 'grey',
  },
  communityContainer: {
    flex: 1 ,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  communityHead: {
    flexDirection: 'row',
  },
	postText: {
		fontSize: 12,
		color: 'black',
	},
	postImage: {
		width: 200,
		height: 200,
		borderRadius: 10,
		marginBottom: 10,
	},
  postCaption: {
    fontSize: 15,
    color: 'black',
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
    justifyContent: 'space-around',
    marginTop: 22,
  },
  modalView: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 5,
  },
  joinButton: {
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    marginLeft: 20,
    width: 60,
    height: 40,
  },
  buttonOpen: {
    backgroundColor: '#A86154',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'left',
  },
	input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 10,
  },
  policy: {
    fontSize: 20,
    color: '#A86154',
    padding: 20,
  },
  spacer: {
    paddingBottom: 20,
  }
	
});

export default CommunitiesScreen;
