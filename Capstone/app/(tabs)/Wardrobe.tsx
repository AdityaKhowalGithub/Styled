import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';
import Button from '@/components/Button'; // Adjust the path as necessary
import WelcomeSection from '@/components/WardrobeWelcome'; // Adjust the path as necessary
import SummaryContainer from '@/components/SummaryContainer'; // Adjust the path as necessary
import HorizontalScrollView from '@/components/HorizontalView';

export default function TabOneScreen() {
  
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      <WelcomeSection />
      <SummaryContainer />
      <View style={styles.wardrobeHeader}>
        <Text style={styles.wardrobeHeaderText}>{"My Wardrobe"}</Text>
      </View>
      <View style={styles.buttonRow}>
        <Button
          title="add a piece"
          onPress={() => navigation.navigate('AddPiece')} // Update the navigate function as needed
          backgroundColor="#A86154"
        />
        <Button
          title="add an outfit"
          onPress={() => console.log('Add outfit')} // Implement or update onPress as needed
          backgroundColor="#A4763B"
        />
      </View>
    <HorizontalScrollView number={10} />

        {/* <View
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: 2,
            marginBottom: 34,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              width: 107,
              height: 5,
              backgroundColor: "#414040",
              borderRadius: 2,
            }}>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            marginHorizontal: 18,
          }}>
          <Text
            style={{
              color: "#684440",
              fontSize: 18,
              marginRight: 16,
            }}>
            {"My Lookbooks"}
          </Text>

          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}>
          </View>
          <View
            style={{
              width: 166,
              backgroundColor: "#607274",
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#607274",
                paddingVertical: 2,
                paddingHorizontal: 17,
                marginTop: 7,
              }}>

              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                }}>
                {"add new lookbook"}
              </Text>
            </View>
          </View>
        </View> 
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              width: 107,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 117,
              paddingBottom: 9,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
              }}>
              {"Y2K Inspo"}
            </Text>
          </View>
          <View
            style={{
              width: 106,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 101,
              paddingBottom: 11,
              paddingHorizontal: 8,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                width: 90,
              }}>
              {"Coquette Luver"}
            </Text>
          </View>
          <View
            style={{
              width: 107,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 100,
              paddingBottom: 12,
              paddingHorizontal: 8,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 14,
                width: 91,
              }}>
              {"Everything Pink"}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: 2,
            marginBottom: 37,
            marginHorizontal: 18,
          }}>
          <View
            style={{
              width: 107,
              height: 5,
              backgroundColor: "#414040",
              borderRadius: 2,
            }}>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginHorizontal: 24,
          }}>
          <Text
            style={{
              color: "#684440",
              fontSize: 18,
              marginRight: 16,
            }}>
            {"Saved Lookbooks"}
          </Text>

        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
            marginHorizontal: 15,
          }}>
          <View
            style={{
              width: 107,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 102,
              paddingBottom: 12,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 13,
                width: 87,
              }}>
              {"Title of Lookbook"}
            </Text>
          </View>
          <View
            style={{
              width: 107,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 102,
              paddingBottom: 12,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 13,
                width: 87,
              }}>
              {"Title of Lookbook"}
            </Text>
          </View>
          <View
            style={{
              width: 107,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
              paddingTop: 102,
              paddingBottom: 12,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 13,
                width: 87,
              }}>
              {"Title of Lookbook"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 37,
            marginHorizontal: 26,
          }}>

          <Text
            style={{
              color: "#000000",
              fontSize: 10,
            }}>
            {"berilozhan"}
          </Text>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}>
          </View>

          <Text
            style={{
              color: "#000000",
              fontSize: 10,
              marginRight: 53,
            }}>
            {"berilozhan"}
          </Text>

          <Text
            style={{
              color: "#000000",
              fontSize: 10,
            }}>
            {"berilozhan"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginHorizontal: 24,
          }}>
          <Text
            style={{
              color: "#684440",
              fontSize: 18,
              marginRight: 16,
            }}>
            {"Saved Pieces and Outfits"}
          </Text>

        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              width: 107,
              height: 140,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
            }}>
          </View>
          <View
            style={{
              width: 106,
              height: 140,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
            }}>
          </View>
          <View
            style={{
              width: 107,
              height: 140,
              backgroundColor: "#D9D9D9",
              borderRadius: 8,
            }}>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: 2,
            marginBottom: 47,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              width: 107,
              height: 5,
              backgroundColor: "#424040",
              borderRadius: 2,
            }}>
          </View>
        </View>*/}




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
  });
    

