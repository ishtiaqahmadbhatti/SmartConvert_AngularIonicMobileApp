import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SmartConvert_AngularIonicMobileApp',
  webDir: 'www/browser',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-3940256099942544~3347511713', // Test App ID
      requestTrackingAuthorization: true, // Optional: Requests ATT on iOS
    },
  },

  server: {
    cleartext: true, // Allow HTTP requests
    androidScheme: 'http',
  },
  
};

export default config;
