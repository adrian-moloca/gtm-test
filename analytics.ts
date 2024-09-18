import { analytics } from './firebase';
import { trackFacebookEvent } from './facebookAnalytics';

export const trackEvent = async (eventName: string, eventData?: Record<string, any>) => {
  try {
    if (eventData) {
      await analytics().logEvent(eventName, eventData);
    } else {
      await analytics().logEvent(eventName);
    }

    trackFacebookEvent(eventName, eventData);

    console.log(`Event ${eventName} tracked successfully`);
  } catch (error) {
    console.error(`Error tracking event ${eventName}:`, error);
  }
};
