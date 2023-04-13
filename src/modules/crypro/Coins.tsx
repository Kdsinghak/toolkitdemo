import {Text, View} from 'react-native';
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
    <View>
      <Text>Coins</Text>
    </View>
  );
};

export default Coins;
