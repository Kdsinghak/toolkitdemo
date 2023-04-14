import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {fetchcoins} from './action';
import {useDispatch} from 'react-redux';
import codePush from 'react-native-code-push';
const Coins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchcoins(
        (onSuccess: any) => {},
        (onFailure: any) => {},
      ),
    );
  }, []);

  function onButtonPress(): void {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE, // IMMEDIATE,ON_NEXT_RESTART,ON_NEXT_RESUME,ON_NEXT_SUSPEND
    });
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>Check for updates</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coins;
