import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { scheduleDailyNotification } from './Notification';
import { registerForPushNotificationsAsync } from './Notification';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    scheduleDailyNotification();
  }, []); 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Send Notification" onPress={scheduleDailyNotification} />
    </View>
  );
};

export default App; 