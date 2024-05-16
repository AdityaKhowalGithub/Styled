import React, { useState } from 'react';
import { View, Alert, Modal, Text, Switch, TextInput, StyleSheet, Button } from 'react-native';

interface CreateCommunitiesProps {
  visible: boolean;
  onClose: () => void;
}

const CreateCommunityScreen = () => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create a community</Text>
        <TextInput
          style={styles.input}
          placeholder="What is the name of your community?"
          value={communityName}
          onChangeText={setCommunityName}
        />
        <View style={styles.privacyContainer}>
          <Text style={styles.privacyText}>Make this community public?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPublic ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsPublic}
            value={isPublic}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Describe your community in one sentence."
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button
          title="Create Community"
          onPress={() => Alert.alert('Community created!')}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 12,
  },
  privacyText: {
    fontSize: 16,
  }
});

export default CreateCommunityScreen;
