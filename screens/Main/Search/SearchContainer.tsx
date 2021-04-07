import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import api from '../../../api';
import SearchPresenter from './SearchPresenter';

export default ({ token }) => {
  const navigation = useNavigation();
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState();
  const [beds, setBeds] = useState<number | undefined>();
  const [bedrooms, setBedrooms] = useState<number | undefined>();
  const [bathrooms, setBathrooms] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const triggerSearch = async () => {
    setSearching(true);
    const form = {
      ...(beds && { beds: beds }),
      ...(bedrooms && { bedrooms }),
      ...(bathrooms && { bathrooms }),
      ...(maxPrice && { max_price: maxPrice }),
    };
    try {
      const { data } = await api.search(form, token);
      setResults(data);
    } catch (e) {
      console.log(e);
    } finally {
      setSearching(false);
      Keyboard.dismiss();
    }
  };
  return (
    <SearchPresenter
      navigation={navigation}
      beds={beds}
      setBeds={setBeds}
      bedrooms={bedrooms}
      setBedrooms={setBedrooms}
      bathrooms={bathrooms}
      setBathrooms={setBathrooms}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      searching={searching}
      triggerSearch={triggerSearch}
      results={results}
    />
  );
};
