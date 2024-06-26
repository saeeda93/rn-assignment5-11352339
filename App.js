import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import batteryImage from './assets/battery.png'; // Import the battery image
import profileImage from './assets/profile.png'; // Import the profile image
import searchImage from './assets/search.png'; // Import the search image
import cardImage from './assets/Card.png'; // Import the card image



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <Image
          style={styles.statusImage}
          source={batteryImage}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <Image
          style={styles.searchImage}
          source={searchImage}
        />
      </View>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={cardImage}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60, // Adjust padding to avoid content overlap with status bar
  },
  statusBar: {
    position: 'absolute',
    top: 20, // Adjust the vertical position
    left: 10, // Adjust the left position
    right: 10, // Ensure the right padding
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between date and image
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: '#fff',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20, // Add left margin to the time text
  },
  statusImage: {
    width: 100, // Increased width of the image
    height: 50, // Increased height of the image
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row', // Arrange profile image, text, and search image horizontally
    alignItems: 'flex-start', // Align items vertically at the start
    marginTop: -280, // Position below the status bar with some space
  },
  profileImage: {
    width: 50, // Set the width of the profile image
    height: 50, // Set the height of the profile image
    resizeMode: 'contain',
    marginRight: 10, // Add space between the profile image and text
  },
  profileTextContainer: {
    marginRight: 10, // Add space between the text and search image
  },
  welcomeText: {
    fontSize: 16,
    color: '#000',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  searchImage: {
    width: 160, // Set the width of the search image
    height: 50, // Set the height of the search image
    resizeMode: 'contain',
  },
  cardContainer: {
    marginTop: 20, // Add space between profile section and card
    width: '90%', // Make the card take up 90% of the screen width
    alignItems: 'center', // Center the card horizontally
  },
  cardImage: {
    width: '100%', // Make the image take up the full width of the card container
    height: 200, // Set the height of the card image
    resizeMode: 'cover', // Cover the entire area of the image
    borderRadius: 20, // Make the sides rounded
  },
  mainText: {
    marginTop: 20, // Ensure main text is not overlapped by card
    textAlign: 'center',
  },
});
