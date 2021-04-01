import React, { useState } from 'react';
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Gate } from './components/Gate';
import store, { persistor } from './redux/store';

const cacheImages = () => {
  const images = [
    require('./assets/loginBg.jpeg'),
    'http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png',
  ];
  return images.map((image) => {
    if (typeof image === 'string') {
      Image.prefetch(image);
    } else {
      Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = () => {
  const fonts = [Ionicons.font];
  return fonts.map((font) => {
    Font.loadAsync(font);
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async () => {
    const images = cacheImages();
    const fonts = cacheFonts();
    await Promise.all([...images, ...fonts]);
  };
  return isReady ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
