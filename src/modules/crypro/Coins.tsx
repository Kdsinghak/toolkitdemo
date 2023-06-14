import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {fetchcoins} from './action';
import {useDispatch} from 'react-redux';
import codePush from 'react-native-code-push';
const Coins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchcoins(),
      // (onSuccess: any) => {},
      // (onFailure: any) => {},
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onButtonPress(): void {
    codePush
      .sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE, // IMMEDIATE,ON_NEXT_RESTART,ON_NEXT_RESUME,ON_NEXT_SUSPEND
      })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttontext}>Check for updates</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coins;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttontext: {
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,
  },
});
