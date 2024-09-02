import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Linking } from 'react-native'; // For handling link opening

const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Handle form submission, e.g., send to API or email
    Alert.alert('Success', 'Your message has been sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Contact Us</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor="#ccc"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/master-utsav')}>
            <Image source={require('@/assets/icons/linkedin.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://github.com/Master-utsav/Master-Recipe-Expo-React-Native')}>
            <Image source={require('@/assets/icons/github.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://instagram.com/master_utsav')}>
            <Image source={require('@/assets/icons/instagram.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
    padding: 16,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', // White text for dark background
    fontFamily: 'outfit-bold',
  },
  input: {
    height: 50,
    borderColor: '#444', // Darker border color
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff', // White text for inputs
    backgroundColor: '#333', // Dark background for inputs
    fontFamily: 'outfit-medium',
  },
  messageInput: {
    padding: 10,
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'outfit-medium',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default ContactScreen;
