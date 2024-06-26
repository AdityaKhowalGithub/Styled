
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Alert, Button, Modal, Pressable, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { AuthStore } from "../../store";
import { useRouter, useSegments } from "expo-router";

export default function TabOneScreen() {
    const { initialized, isLoggedIn } = AuthStore.useState();
    const segments = useSegments();
    const router = useRouter();

    const [feedData, setFeedData] = useState({
        user: '',
        communityName: '',
        caption: '',
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState('');
    
    const [guideVisible, setGuideVisible] = useState(false);

    const [isPress, setIsPress] = useState(false);

    const IMAGES = {
        "christiller": require("@/assets/images/christillerpfp.png"),
        "post": require("@/assets/images/postpic.png"),
        "comment": require("@/assets/images/comment.png"),
        "like": require("@/assets/images/like.png"),
        "styledpfp": require("@/assets/images/styledpfp.png"),
        "styledpost": require("@/assets/images/styledpost.jpg"),
        "article1" : require("@/assets/images/article1.png"),
        "article3" : require("@/assets/images/article3.png"),
        "clock" : require("@/assets/images/clock.png")
    };

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'red', // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
    };

    // useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    // useEffect(() => {
    // setTimeout(() => {
    // if (!isLoggedIn && !inAuthGroup) {
    // router.replace("/(auth)/LoginScreen");
    // } else if (isLoggedIn) {
    // router.replace("/(tabs)");
    // }
    // }, 500); // Delay for 500 ms
    // }, [segments, isLoggedIn, initialized]);


    useEffect(() => {
        console.log("isLoggedIn: ", isLoggedIn, " | initialized: ", initialized, " | Segment: ", segments[0]);
        setTimeout(() => {
            if (!isLoggedIn && !inAuthGroup) {
                console.log("Redirecting to login because user is not logged in and not in auth group");
                router.replace("/(auth)/LoginScreen");
            } 
            // else if (isLoggedIn) {
            //     console.log("Redirecting to tabs because user is logged in");
            //     router.replace("/(tabs)");
            // }
        }, 500); // Delay for 500 ms
    }, [segments, isLoggedIn, initialized]);

    // useEffect(() => {
    //     console.log("isLoggedIn: ", isLoggedIn, " | initialized: ", initialized, " | Segment: ", segments[0]);
    //     if (!isLoggedIn && !inAuthGroup) {
    //         console.log("Redirecting to login because user is not logged in and not in auth group");
    //         router.replace("/(auth)/LoginScreen");
    //     }
    // }, [segments, isLoggedIn, initialized]);



    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.header}>Activity</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={guideVisible}
                onRequestClose={() => {
                setGuideVisible(!guideVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.guideView}>

                    
                    <ScrollView>
                        
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Guide</Text>
                    </View>
                    <Text style={styles.name}>Recommended</Text>
                    <View style={styles.postContainer}>
                        <View style={styles.centerContainer}>
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                <Text style={{color: 'red'}}>New Article</Text>
                                <Text style={styles.postText}>
                                    <Text style={styles.name}>A List Of The Worst Fast Fashion Brands To Avoid & Why (2024)</Text>
                                </Text>
                            </View>
                            <Image
                                style={styles.postImage}
                                source={IMAGES["article1"]}
                            />
                        </View>
                        <View style={{
                                flexDirection: 'row',
                            }}>
                        <Image
                            style={styles.icon}
                            source={IMAGES["clock"]}
                        />
                        <Text>6 min read</Text>
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <View style={styles.centerContainer}>
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                
                                <Text style={styles.postText}>
                                    <Text style={styles.name}>Op-Ed: What to do about the fashion in the room?</Text>
                                </Text>
                            </View>
                        <Text style={{
                            fontSize: 15,
                            color: 'black',
                            marginLeft: 35,
                            marginBottom: 10,
                        }}>
                            Explore the environmental footprint of fashion and climate change, revealing insights on textile industry pollution and offering practical tips for conscious consumer choices.
                        </Text>    
                        </View>
                        <View style={{
                                flexDirection: 'row',
                            }}>
                        <Image
                            style={styles.icon}
                            source={IMAGES["clock"]}
                        />
                        <Text>2 min read</Text>
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <View style={styles.centerContainer}>
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                <Image
                                style={styles.postImage}
                                source={IMAGES["article3"]}
                                />
                                <Text style={styles.postText}>
                                    <Text style={styles.name}>How to be a sustainable fashion lover - and why it matters</Text>
                                </Text>

                            </View>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                marginLeft: 35,
                                marginBottom: 10,
                            }}>
                                Upcycling, visible mending and organising are among the ways fashionistas are giving their wardrobes a longer life; Bel Jacobs explores how caring for our clothes also means caring for the planet.
                            </Text>    
                        </View>
                        <View style={{
                                flexDirection: 'row',
                            }}>
                        <Image
                            style={styles.icon}
                            source={IMAGES["clock"]}
                        />
                        <Text>Long read</Text>
                        </View>
                    </View>
                    
                    </ScrollView>

                    
                    <TouchableHighlight
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setGuideVisible(!guideVisible)}>
                    <Text style={styles.textStyle}>Go Back to Activity</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setGuideVisible(true)}>
                <Text style={styles.textStyle}>Guide</Text>
            </Pressable>
            <View style={styles.postContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.postHead}>
                        <Image
                            style={styles.profileImage}
                            source={IMAGES["christiller"]}
                        />
                        <Text style={styles.postText}>
                            <Text style={styles.name}>Chris Tiller posts in Seattle Vintage Collect</Text>
                        </Text>
                    </View>
                    <Image
                        style={styles.postImage}
                        source={IMAGES["post"]}
                    />
                </View>
                <Image
                    style={styles.icon}
                    source={IMAGES["like"]}
                />
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    marginLeft: 35,
                    marginBottom: 10,
                }}>
                    {feedData.caption}
                </Text>
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
                    style={[styles.commentButton, styles.commentButtonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>View comments...</Text>
                </Pressable>
            </View>

            <View style={styles.postContainer}>
                <View style={styles.centerContainer}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Image
                            style={styles.profileImage}
                            source={IMAGES["styledpfp"]}
                        />
                        <Text style={styles.postText}>
                            <Text style={styles.name}>TeamStyled</Text>
                        </Text>
                    </View>
                    <Image
                        style={styles.postImage}
                        source={IMAGES["styledpost"]}
                    />
                </View>
                <Image
                    style={styles.icon}
                    source={IMAGES["like"]}
                />
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    marginLeft: 35,
                    marginBottom: 10,
                }}>
                    How to be a sustainable fashion lover – and why it matters: Upcycling, visible mending and organising are among the ways fashionistas are giving their wardrobes a longer life; Bel Jacobs explores how caring for our clothes also means caring for the planet.
                </Text>
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
                    style={[styles.commentButton, styles.commentButtonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>View comments...</Text>
                </Pressable>
            </View>

            <View style={styles.postContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.postHead}>
                        <Image
                            style={styles.profileImage}
                            source={IMAGES["christiller"]}
                        />
                        <Text style={styles.postText}>
                            <Text style={styles.name}>Chris Tiller posts in Seattle Vintage Collect</Text>
                        </Text>
                    </View>
                    <Image
                        style={styles.postImage}
                        source={IMAGES["post"]}
                    />
                </View>
                <Image
                    style={styles.icon}
                    source={IMAGES["like"]}
                />
                <Text style={{
                    fontSize: 15,
                    color: 'black',
                    marginLeft: 35,
                    marginBottom: 10,
                }}>
                    {feedData.caption}
                </Text>
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
                                <Text style={styles.header}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.commentButton, styles.commentButtonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>View comments...</Text>
                </Pressable>

            </View>

        </ScrollView >
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
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
    },
    postHead: {
        flexDirection: 'row',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingLeft: 10,
        marginTop: 30,
    },
    username: {
        fontSize: 16,
        color: 'grey',
    },
    postContainer: {
        marginTop: 30,
        padding: 20,
    },
    centerContainer: {
        alignItems: 'center',
    },
    postText: {
        fontSize: 18,
        color: 'black',
    },
    postImage: {
        width: 300,
        height: 300,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 15,
    },
    icon: {
        width: 30,
        height: 30,
        alignItems: 'flex-start',
        marginLeft: 30,
        marginBottom: 10,
        marginRight: 10,
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
    commentButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 150,
        marginLeft: 20,
    },
    buttonOpen: {
        backgroundColor: 'white',
    },
    commentButtonOpen: {
        backgroundColor: 'white',
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
    },
    articleContainer: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    articleImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    articleContent: {
        flex: 1,
        justifyContent: 'center',
    },
    articleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    readTime: {
        marginTop: 5,
        color: '#666',
        fontSize: 14,
    },
    guideView: {
        margin: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
      },
});
