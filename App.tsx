import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const cacheImages = () => {
  const images = [
    require('./assets/loginBg.jpeg'),
    'http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png',
  ];
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = () => {
  const fonts = [Ionicons.font];
  return fonts.map((font) => Font.loadAsync(font));
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  const loadAssets = async (): Promise<any> => {
    const images: Promise<any>[] = cacheImages();
    const fonts = cacheFonts();
    return Promise.all([...images, ...fonts]);
  };
  return isReady ? (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
