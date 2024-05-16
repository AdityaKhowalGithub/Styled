// GuideScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

type Article = {
    id: string;
    title: string;
    summary: string;
    readTime: string;
    imageUrl: string;
};

const articles: Article[] = [
    {
        id: '1',
        title: 'A List Of The Worst Fast Fashion Brands To Avoid & Why (2024)',
        summary: 'Find new fashion inspiration and share your unique style with others.',
        readTime: '6 min read',
        imageUrl: 'https://example.com/image1.jpg',
    },
    {
        id: '2',
        title: 'What to do about the fashion in the room?',
        summary: 'Explore the environmental footprint of fashion and climate change, revealing insights on textile industry pollution and offering practical tips for conscious consumer choices.',
        readTime: '2 min read',
        imageUrl: 'https://example.com/image2.jpg',
    },
    {
        id: '3',
        title: 'How to be a sustainable fashion lover — and why it matters',
        summary: 'Upcycling, visible mending and organising are among the ways fashionistas are giving their wardrobes a longer life; Bel Jacobs explores how caring for our clothes also means caring for the planet.',
        readTime: 'Long Read',
        imageUrl: 'https://example.com/image3.jpg',
    },
];

const GuideScreen = () => {
    const renderItem = ({ item }: { item: Article }) => (
        <TouchableOpacity style={styles.articleContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.articleImage} />
            <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>{item.title}</Text>
                <Text>{item.summary}</Text>
                <Text style={styles.readTime}>{item.readTime}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Recommended</Text>
            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        marginLeft: 15,
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
});

export default GuideScreen;
