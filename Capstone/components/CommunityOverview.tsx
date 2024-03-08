import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Alert, Button, Modal } from 'react-native';

const CommunityOverviewScreen = ({}) => {
	
  // State to store post data
  const [communityData, setCommunityData] = useState({
		communityName: '',
    communityPicUri: '',
    memberCount: '',
    communityBio: '',
    communityLead: '',
  });

  const [postData, setPostData] = useState({
    user: '',
		profilePicUri: '',
    communityName: '',
    postImageUri: '',
    caption: '',
  });

	var [ isPress, setIsPress ] = React.useState(false);
	var touchProps = {
    activeOpacity: 1,
    underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
  };

  useEffect(() => {
    // Dummy data for the feed
    const communityData = {
      communityName: 'Seattle Vintage Collect',
      communityPicUri: require("@/assets/images/seattlevintagepfp.png"),
      memberCount: '1031',
      communityBio: 'Welcome to Seattle Vintage Collect! Make sure to read the rules on posting or commenting! Have a great time.',
      communityLead: 'jenniferlovespink',
    };
    
    const dummyPostData = {
      user: 'Chris Tiller',
      profilePicUri: require("@/assets/images/christillerpfp.png"),
      communityName: 'Y2K mix',
      postImageUri: '../assets/images/postpic.png',
      caption: 'Suggestions on shoes that match?',
    };

    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setCommunityData(communityData);
      setPostData(dummyPostData);
    }, 1000);
  });

  if (!communityData.communityName) {
    return <Text>Loading...</Text>;
  }

  if (!postData.user) {
    return <Text>No posts currently...</Text>;
  }

  return (
		<ScrollView style={styles.container}>
			
			<View style={styles.headerContainer}>
				<Text style={styles.header}>{communityData.communityName}</Text>
			</View>
  
      <View style={styles.communityContainer}>
			  <Image
          style={styles.profileImage}
          source={{ uri: communityData.communityPicUri }}
        />
				<Text style={styles.name}>Community Lead {"\n"}@{communityData.communityLead}</Text>
				<Button
        title="Join"
        onPress={() => Alert.alert('Join button pressed')}
      	/>
			  <Text style={styles.postText}>{communityData.communityBio}</Text>
				<Text style={styles.policy}>Community Policy</Text>
        <Button
          title="Add Post"
          onPress={() => Alert.alert('Add Post button pressed')}
      	/>
      </View>
      <View style={styles.postContainer}>
        <Image
            style={styles.profileImage}
            source={{ uri: postData.profilePicUri }}
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{postData.user}</Text>
          </Text>
          <Image
            style={styles.postImage}
            source={{ uri: postData.postImageUri }}
          />
          <Text style={styles.postText}>
            <Text style={styles.name}>{postData.caption}</Text>
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
	header: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#333',
	},
  categories: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  communityImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginBottom: 10,
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
  communityContainer: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  policy: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
	
});

export default CommunityOverviewScreen;
