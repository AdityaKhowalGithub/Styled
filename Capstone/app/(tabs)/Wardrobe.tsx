import Button from "@/components/Button"; // Adjust the path as necessary
import HorizontalScrollView from "@/components/HorizontalView";
import SummaryContainer from "@/components/SummaryContainer"; // Adjust the path as necessary
import { Text, View } from "@/components/Themed";
import WelcomeSection from "@/components/WardrobeWelcome"; // Adjust the path as necessary
import wardrobeItems from "@/components/wardrobe_items.json";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const MyModal: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>This is my modal!</Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function TabOneScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <MyModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
        <WelcomeSection />
        <SummaryContainer />
        <View style={styles.wardrobeHeader}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.wardrobeHeaderText}>{"My Wardrobe"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <Button
            title="add a piece"
            onPress={() => navigation.navigate("add")} // Update the navigate function as needed
            backgroundColor="#A86154"
          />
          <Button
            title="add an outfit"
            onPress={() => console.log("Add outfit")} // Implement or update onPress as needed
            backgroundColor="#A4763B"
          />
        </View>
        <HorizontalScrollView items={wardrobeItems} />

        <View style={styles.buttonRow}>
          <View style={styles.wardrobeHeader}>
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
              {/* onPress={() => navigation.navigate('MyWardrobeScreen)} */}
              <Text style={styles.wardrobeHeaderText}>{"My Lookbooks"}</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="add an outfit"
            onPress={() => console.log("Add a new lookbook")} // Implement or update onPress as needed
            backgroundColor="#A4763B"
          />
        </View>
        <HorizontalScrollView items={wardrobeItems} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "#FFF8ED",
    paddingVertical: 21,
    paddingRight: 18,
    marginBottom: 14,
    marginLeft: 32,
  },
  headerText: {
    color: "#000",
    fontSize: 22,
    marginBottom: 16,
    marginLeft: -12, // Adjusted to align text properly
  },
  totalPiecesContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingTop: 35,
    paddingBottom: 24,
    marginLeft: -10, // Adjusted for alignment
    marginHorizontal: 22,
  },
  totalPiecesText: {
    color: "#000",
    fontSize: 18,
    marginBottom: 16,
    marginHorizontal: 23,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pieceDetailText: {
    color: "#000",
    fontSize: 15,
    marginHorizontal: 7,
  },
  wardrobeTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 23,
  },
  wardrobeTitleText: {
    color: "#684440",
    fontSize: 18,
    marginRight: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 18,
  },
  buttonBase: {
    width: 166,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 9,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  wardrobeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 23,
  },
  wardrobeHeaderText: {
    color: "#684440",
    fontSize: 18,
    marginRight: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
