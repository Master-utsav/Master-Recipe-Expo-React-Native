import { useRouter, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { indianDishes } from '@/assets/data/recipes'; // Adjust the path according to your file structure

const RecipeDetail: React.FC = () => {
  const { recipeId } = useLocalSearchParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const foundRecipe = indianDishes.find(dish => dish.id === recipeId);
        if (!foundRecipe) {
          router.replace('/menu');
        } else {
          setRecipe(foundRecipe);
        }
      } catch (error) {
        router.replace('/');
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading recipe...</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/menu')}>
          <Text style={styles.buttonText}>Go to Menu</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {recipe.imageUrl ? (
          <Image source={recipe.imageUrl} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text>No Image Available</Text>
          </View>
        )}
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>

        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {recipe.recipe.ingredients.map((ingredient: string, index: number) => (
          <Text key={index} style={styles.listItem}>{`• ${ingredient}`}</Text>
        ))}

        <Text style={styles.sectionTitle}>Instructions:</Text>
        {recipe.recipe.instructions.map((instruction: string, index: number) => (
          <Text key={index} style={styles.listItem}>{`${index + 1}. ${instruction}`}</Text>
        ))}
        <TouchableOpacity style={styles.buttonBack} onPress={() => router.push("/menu")}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    paddingTop: 12,
    backgroundColor: '#1a1a1a', // Dark theme background
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff', // Text color to match dark theme
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ccc', // Lighter color for description
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#fff', // Text color to match dark theme
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    color: '#ccc', // Lighter color for list items
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#fff', // Text color to match dark theme
  },
  button: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  buttonBack: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
});

export default RecipeDetail;
