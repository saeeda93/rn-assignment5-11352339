import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>Eric Atsu</Text>
        <View style={styles.navButtons}>
          {['Topup', 'Receive', 'Sent', 'Loan'].map((item) => (
            <TouchableOpacity key={item} style={styles.navButton}>
              <Text style={styles.navButtonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Transaction Section */}
      <View style={styles.transactionSection}>
        <Text style={styles.transactionTitle}>$300</Text>
        <Text style={styles.transactionSubtitle}>Money Transfer</Text>
        {[
          { amount: '- $ 88', description: 'Grocery Shopping' },
          { amount: '- $5,99', description: 'Apple Store Entertainment' },
          { amount: '- $12,99', description: 'Spotify Music' },
          { amount: '- $5,99', description: 'Apple Store Entertainment' },
        ].map((transaction, index) => (
          <View key={index} style={styles.transaction}>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
          </View>
        ))}
      </View>

      {/* Card Section */}
      <View style={styles.cardSection}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardName}>AR Jonson</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.cardDetail}>Expiry Date</Text>
          <Text style={styles.cardDetail}>24/2000</Text>
        </View>
        <View style={styles.cardDetails}>
          <Text style={styles.cardDetail}>CVV</Text>
          <Text style={styles.cardDetail}>6986</Text>
        </View>
        <Text style={styles.cardBrand}>Mastercard</Text>
      </View>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        {['Change Password', 'Privacy Policy', 'Theme', 'Language', 'Contact Us', 'My Profile'].map((item) => (
          <TouchableOpacity key={item} style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    marginBottom: 16,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  navButtonText: {
    fontSize: 16,
  },
  transactionSection: {
    marginBottom: 24,
  },
  transactionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  transactionSubtitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 18,
  },
  transactionDescription: {
    fontSize: 18,
  },
  cardSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardName: {
    fontSize: 18,
    marginBottom: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardDetail: {
    fontSize: 16,
  },
  cardBrand: {
    fontSize: 18,
    textAlign: 'right',
    marginTop: 8,
  },
  settingsSection: {
    marginBottom: 24,
  },
  settingsButton: {
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  settingsButtonText: {
    fontSize: 16,
  },
});

export default App;
