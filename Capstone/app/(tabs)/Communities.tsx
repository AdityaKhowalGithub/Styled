import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Alert, Button, Modal } from 'react-native';

const CommunitiesScreen = ({}) => {
	
  // State to store post data
  const [communityData, setCommunityData] = useState({
		communityName: '',
    communityPicUri: '',
    memberCount: '',
    communityBio: '',
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
    const dummyData1 = {
        communityName: 'Seattle Vintage Collect',
				communityPicUri: '',
        memberCount: '1,031 members',
        communityBio: 'Find new fashion inspiration and share your unique style with others.',
    };
    
    // Simulating a fetch request with a timeout
    setTimeout(() => {
      setCommunityData(dummyData1);
    }, 1000);
  });

  if (!communityData.communityName) {
    return <Text>Loading...</Text>;
  }

  return (
		<ScrollView style={styles.container}>
			
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Community</Text>
			</View>
      <Text style={styles.categories}>Communities for you</Text>
      <View style={styles.communityContainer}>
			    <Image
          style={styles.profileImage}
          source={{ uri: communityData.communityPicUri }}
        />
        <Text style={styles.postText}>
					<Text style={styles.name}>{communityData.communityName}</Text>
				</Text>
				<Button
        title="Join"
        onPress={() => Alert.alert('Join button pressed')}
      	/>
				<Text style={styles.postText}>
					<Text style={styles.name}>{communityData.communityBio}</Text>
				</Text>
      </View>
      <Text style={styles.categories}>Top in Seattle</Text>
      <Text style={styles.categories}>Top in USA</Text>
      

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
  }
	
});

export default CommunitiesScreen;
