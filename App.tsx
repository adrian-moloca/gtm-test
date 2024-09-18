import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
// import { AppEventsLogger } from 'react-native-fbsdk-next';
// import analytics from '@react-native-firebase/analytics';

const App = () => {
  useEffect(() => {
    const trackEvent = async () => {
      // Firebase Analytics Event
      // await analytics().logEvent('purchase', {
      //   item: 'Test Product',
      //   value: 50,
      // });

      // Facebook Pixel Event
      // AppEventsLogger.logEvent('fb_mobile_purchase', 50, {
      //   currency: 'USD',
      //   item: 'Test Product',
      // });
    };

    trackEvent();
  }, []);

  return (
    <View>
      <Text>Google Tag Manager</Text>
    </View>
  );
};

export default App;
