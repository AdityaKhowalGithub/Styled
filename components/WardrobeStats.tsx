// WardrobeStats.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, listAll, ref } from 'firebase/storage';
import { auth } from '@/services/firebaseconfig';

const WardrobeStats = () => {
  const [clothingCount, setClothingCount] = useState(0);
  const [outfitCount, setOutfitCount] = useState(0);
  const [sustainabilityPercentage, setSustainabilityPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const firestore = getFirestore();
      const storage = getStorage();
      const categories = ['dresses', 'outerwear', 'tops', 'shoes'];
      let totalItems = 0;
      let totalSustainableItems = 0;
      let totalThrifted = 0;
      let totalGifted = 0;
      let totalShopped = 0;

      for (const category of categories) {
        const categoryRef = ref(storage, `images/${user.uid}/clothes/${category}`);
        const categorySnapshot = await listAll(categoryRef);
        totalItems += categorySnapshot.items.length;

        const categoryDoc = doc(firestore, `users/${user.uid}/clothes/${category}`);
        const categorySnapshotFirestore = await getDoc(categoryDoc);
        if (categorySnapshotFirestore.exists()) {
          const filePath = categorySnapshotFirestore.data().filePath;
          Object.values(filePath).forEach(value => {
            if (value === 'thrifted') {
              totalThrifted += 1;
            } else if (value === 'gifted') {
              totalGifted += 1;
            } else if (value === 'bought') {
              totalShopped += 1;
            }
          });
        }
      }

      // Fetching number of outfits
      const outfitsRef = ref(storage, `images/${user.uid}/clothes/outfits`);
      const outfitsSnapshot = await listAll(outfitsRef);
      const outfitsCount = outfitsSnapshot.items.length;

      totalSustainableItems = totalThrifted + totalGifted; // Good (thrifted) + Neutral (gifted)
      const sustainabilityScore = totalItems ? (totalSustainableItems / totalItems) * 100 : 0;

      setClothingCount(totalItems);
      setOutfitCount(outfitsCount);
      setSustainabilityPercentage(sustainabilityScore);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.statText}>Total Clothing Items: {clothingCount}</Text>
      <Text style={styles.statText}>Total Outfits: {outfitCount}</Text>
      <Text style={styles.statText}>Sustainability: {sustainabilityPercentage.toFixed(2)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default WardrobeStats;
