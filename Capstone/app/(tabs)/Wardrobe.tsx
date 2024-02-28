import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';

export default function TabOneScreen() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView 
	style = {{
		flex: 1,
		backgroundColor: "#FFFFFF",
	}}>
	<ScrollView  
		style = {{
			flex: 1,
			backgroundColor: "#FFFFFF",
		}}>
		<View 
			style = {{
				backgroundColor: "#FFF8ED",
				paddingVertical: 21,
				paddingRight: 18,
				marginBottom: 14,
			}}>
			<View 
				style = {{
					flexDirection: "row",
					alignItems: "center",
					marginBottom: 25,
					marginLeft: 32,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 17,
						marginRight: 9,
					}}>
					{"9:41"}
				</Text>
				
				<View 
					style = {{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</View>
				
				
			</View>
			<Text 
				style = {{
					color: "#000000",
					fontSize: 22,
					marginBottom: 16,
					marginLeft: 20,
					width: 352,
				}}>
				{"Welcome to your digital closet, \nJohn Doe"}
			</Text>
			<View 
				style = {{
					backgroundColor: "#FFFFFF",
					borderRadius: 12,
					paddingTop: 35,
					paddingBottom: 24,
					marginLeft: 22,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 18,
						marginBottom: 16,
						marginHorizontal: 23,
					}}>
					{"You have 40 total pieces."}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 9,
						marginHorizontal: 33,
					}}>
					
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginHorizontal: 7,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
						}}>
						{"20 tops"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
						}}>
						{"20 bottoms"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
						}}>
						{"10 dresses"}
					</Text>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
						}}>
						{"5 shoes"}
					</Text>
				</View>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 12,
				marginHorizontal: 23,
			}}>
			<Text 
				style = {{
					color: "#684440",
					fontSize: 18,
					marginRight: 16,
				}}>
				{"My Wardrobe"}
			</Text>
			
		</View>
		<View 
			style = {{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 12,
				marginHorizontal: 18,
			}}>
			<View 
				style = {{
					width: 166,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#A86154",
					borderRadius: 5,
					paddingVertical: 9,
				}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: "stretch",
              alignItems: "center", // Align text in the center horizontally
              justifyContent: "center", // Align text in the center vertically
            }}
            onPress={() => {
              navigation.navigate('add' );
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 13,
              }}
            >
              {"add a piece"}
            </Text>
          </TouchableOpacity>
{/* 				
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 13,
					}}>
					{"add a piece"}
				</Text> */}
			</View>
			<View 
				style = {{
					width: 166,
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#A4763B",
					borderRadius: 5,
					paddingVertical: 9,
				}}>
				
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 13,
					}}>
					{"add an outfit"}
				</Text>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 8,
				marginHorizontal: 18,
			}}>
			<View 
				style = {{
					width: 107,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
			<View 
				style = {{
					width: 106,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
			<View 
				style = {{
					width: 107,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
		</View>
		<View 
			style = {{
				backgroundColor: "#C4C4C4",
				borderRadius: 2,
				marginBottom: 34,
				marginHorizontal: 18,
			}}>
			<View 
				style = {{
					width: 107,
					height: 5,
					backgroundColor: "#414040",
					borderRadius: 2,
				}}>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 15,
				marginHorizontal: 18,
			}}>
			<Text 
				style = {{
					color: "#684440",
					fontSize: 18,
					marginRight: 16,
				}}>
				{"My Lookbooks"}
			</Text>
			
			<View 
				style = {{
					flex: 1,
					alignSelf: "stretch",
				}}>
			</View>
			<View 
				style = {{
					width: 166,
					backgroundColor: "#607274",
					borderRadius: 5,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#607274",
						paddingVertical: 2,
						paddingHorizontal: 17,
						marginTop: 7,
					}}>
					
					<Text 
						style = {{
							color: "#FFFFFF",
							fontSize: 13,
						}}>
						{"add new lookbook"}
					</Text>
				</View>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 15,
				marginHorizontal: 18,
			}}>
			<View 
				style = {{
					width: 107,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 117,
					paddingBottom: 9,
					paddingHorizontal: 10,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 14,
					}}>
					{"Y2K Inspo"}
				</Text>
			</View>
			<View 
				style = {{
					width: 106,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 101,
					paddingBottom: 11,
					paddingHorizontal: 8,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 14,
						width: 90,
					}}>
					{"Coquette Luver"}
				</Text>
			</View>
			<View 
				style = {{
					width: 107,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 100,
					paddingBottom: 12,
					paddingHorizontal: 8,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 14,
						width: 91,
					}}>
					{"Everything Pink"}
				</Text>
			</View>
		</View>
		<View 
			style = {{
				backgroundColor: "#C4C4C4",
				borderRadius: 2,
				marginBottom: 37,
				marginHorizontal: 18,
			}}>
			<View 
				style = {{
					width: 107,
					height: 5,
					backgroundColor: "#414040",
					borderRadius: 2,
				}}>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 12,
				marginHorizontal: 24,
			}}>
			<Text 
				style = {{
					color: "#684440",
					fontSize: 18,
					marginRight: 16,
				}}>
				{"Saved Lookbooks"}
			</Text>
			
		</View>
		<View 
			style = {{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 4,
				marginHorizontal: 15,
			}}>
			<View 
				style = {{
					width: 107,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 102,
					paddingBottom: 12,
					paddingHorizontal: 10,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						width: 87,
					}}>
					{"Title of Lookbook"}
				</Text>
			</View>
			<View 
				style = {{
					width: 107,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 102,
					paddingBottom: 12,
					paddingHorizontal: 10,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						width: 87,
					}}>
					{"Title of Lookbook"}
				</Text>
			</View>
			<View 
				style = {{
					width: 107,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
					paddingTop: 102,
					paddingBottom: 12,
					paddingHorizontal: 10,
				}}>
				<Text 
					style = {{
						color: "#000000",
						fontSize: 13,
						width: 87,
					}}>
					{"Title of Lookbook"}
				</Text>
			</View>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 37,
				marginHorizontal: 26,
			}}>
			
			<Text 
				style = {{
					color: "#000000",
					fontSize: 10,
				}}>
				{"berilozhan"}
			</Text>
			<View 
				style = {{
					flex: 1,
					alignSelf: "stretch",
				}}>
			</View>
			
			<Text 
				style = {{
					color: "#000000",
					fontSize: 10,
					marginRight: 53,
				}}>
				{"berilozhan"}
			</Text>
			
			<Text 
				style = {{
					color: "#000000",
					fontSize: 10,
				}}>
				{"berilozhan"}
			</Text>
		</View>
		<View 
			style = {{
				flexDirection: "row",
				alignItems: "center",
				marginBottom: 12,
				marginHorizontal: 24,
			}}>
			<Text 
				style = {{
					color: "#684440",
					fontSize: 18,
					marginRight: 16,
				}}>
				{"Saved Pieces and Outfits"}
			</Text>
			
		</View>
		<View 
			style = {{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 10,
				marginHorizontal: 16,
			}}>
			<View 
				style = {{
					width: 107,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
			<View 
				style = {{
					width: 106,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
			<View 
				style = {{
					width: 107,
					height: 140,
					backgroundColor: "#D9D9D9",
					borderRadius: 8,
				}}>
			</View>
		</View>
		<View 
			style = {{
				backgroundColor: "#C4C4C4",
				borderRadius: 2,
				marginBottom: 47,
				marginHorizontal: 16,
			}}>
			<View 
				style = {{
					width: 107,
					height: 5,
					backgroundColor: "#424040",
					borderRadius: 2,
				}}>
			</View>
		</View>
		
		
			

	</ScrollView>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
