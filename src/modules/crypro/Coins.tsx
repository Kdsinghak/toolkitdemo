import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fetchcoins} from './action';
import {useDispatch} from 'react-redux';

const Coins = () => {
  const dispatch = useDispatch();
  //   async () => {
  //     const coinsData = await dispatch(fetchcoins());
  //     console.log(coinsData);
  //   };

  useEffect(() => {
    dispatch(
      fetchcoins(
        (onSuccess: any) => {},
        (onFailure: any) => {},
      ),
    );
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text>Coins</Text>
      <Image source={require('../../assets/delete.png')} />
    </View>
  );
};

export default Coins;
