import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const featuredRecipes = [
  { id: '1', title: 'Spicy Biryani', image: require('@/assets/images/dishes/biryani.jpg') },
  { id: '2', title: 'Chole', image: require('@/assets/images/dishes/chole.jpg') },
  { id: '3', title: 'Dal', image: require('@/assets/images/dishes/daal.jpg') },
  { id: '4', title: 'Dosa', image: require('@/assets/images/dishes/dosa.jpg') },
  { id: '5', title: 'Gulab Jamun', image: require('@/assets/images/dishes/gulab-jamun.jpg') },
  { id: '6', title: 'Khichdi', image: require('@/assets/images/dishes/kichdi.jpg') },
  { id: '7', title: 'Naan', image: require('@/assets/images/dishes/naan.jpg') },
  { id: '8', title: 'Palak Paneer', image: require('@/assets/images/dishes/palakad.jpg') },
  { id: '9', title: 'Paneer Tikka', image: require('@/assets/images/dishes/panner-tikka.jpeg') },
  { id: '10', title: 'Rajma', image: require('@/assets/images/dishes/rajma.jpg') },
];

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.overlay}>
          <Text style={styles.appName}>Master's Recipe</Text>
          <Text style={styles.tagline}>Discover Delicious Recipes</Text>
          <Text style={styles.description}>
            Your journey to mastering the art of cooking starts here. Explore a wide range of recipes from various cuisines and become the chef you've always wanted to be.
          </Text>
          
          <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
            <Text style={styles.buttonText}>Explore Recipes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featureSection}>
          <Text style={styles.featureTitle}>Featured Recipes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featureList}>
            {featuredRecipes.map((recipe) => (
              <TouchableOpacity 
                key={recipe.id} 
                style={styles.featureCard} 
                onPress={() => router.push('/menu')}
              >
                <Image source={recipe.image} style={styles.featureImage} />
                <Text style={styles.featureCardTitle}>{recipe.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.testimonialSection}>
          <Text style={styles.testimonialTitle}>What Our Users Say</Text>
          <Text style={styles.testimonialText}>
            "This was my first react-native app build on expo. I am master_utsav web1 + web2 + web3 developer and a learner"
          </Text>
          <Text style={styles.testimonialAuthor}>- Utsav Jaiswal</Text>
          <Text style={styles.testimonialText}>
            "This app has transformed my cooking skills! The recipes are easy to follow and taste amazing."
          </Text>
          <Text style={styles.testimonialAuthor}>- Alex R.</Text>
          <Text style={styles.testimonialText}>
            "I love the variety of recipes available. Every dish I try is a new adventure in my kitchen!"
          </Text>
          <Text style={styles.testimonialAuthor}>- Jamie L.</Text>
          <Text style={styles.testimonialText}>
            "The app's interface is so user-friendly, and the recipes are always on point. Highly recommend!"
          </Text>
          <Text style={styles.testimonialAuthor}>- Morgan S.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark theme background
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker overlay
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  appName: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'outfit-bold',
  },
  tagline: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'outfit-medium',
  },
  description: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'outfit-regular',
  },
  button: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  featureSection: {
    marginVertical: 20,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  featureList: {
    paddingHorizontal: 10,
  },
  featureCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  featureImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  featureCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  testimonialSection: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  testimonialTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  testimonialText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 2,
  },
  testimonialAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});

export default HomeScreen;
