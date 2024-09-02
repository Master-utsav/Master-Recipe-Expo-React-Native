import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { indianDishes } from '@/assets/data/recipes';

const MenuScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Our Delicious Menu</Text>
        {indianDishes.map((dish, index) => (
          <View key={index} style={styles.card}>
            <Image source={dish.imageUrl} style={styles.image} />
            <Image source={dish.imageUrl} style={styles.blurredImage} />
            <Text style={styles.title}>{dish.title}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push(`${dish.recipeLink}`)}>
              <Text style={styles.buttonText} >View Recipe</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff',
    fontFamily: 'outfit-bold',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4, // Adds shadow for Android
    shadowColor: '#333', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  blurredImage: {
    position: "absolute",
    width: '100%',
    height: 205,
    resizeMode: 'cover',
    opacity: 0.5,
    zIndex: -1
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
    color: '#fff',
    fontFamily: 'outfit-bold',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginHorizontal: 15,
    marginBottom: 10,
    fontFamily: 'outfit-medium',
  },
  button: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
});

export default MenuScreen;
