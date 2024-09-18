import { AppEventsLogger } from 'react-native-fbsdk-next';

export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  try {
    if (parameters) {
      AppEventsLogger.logEvent(eventName, parameters);
    } else {
      AppEventsLogger.logEvent(eventName);
    }
    console.log(`Facebook event ${eventName} tracked successfully.`);
  } catch (error) {
    console.error(`Error tracking Facebook event ${eventName}:`, error);
  }
};
