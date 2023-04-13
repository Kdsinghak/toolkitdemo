import {
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddUser, deleteUser, updateUser} from './addUserSlice';

export default function AddDetails() {
  interface renderItemTypes {
    item: {
      title: string;
      body: string;
      userId: string;
    };
    index: number;
  }

  const dispatch = useDispatch();
  const [body, setBody] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [userId, setUserId] = useState<string>();
  const [buttontype, setButtonType] = useState<boolean>(true);
  const [index, setindex] = useState<any>(0);
  const {list} = useSelector((store: any) => store?.userData);

  function handleAdd(): void {
    dispatch(AddUser({title, body, userId}));
  }

  function handleUpdate(): void {
    let newArray: any = [...list];
    newArray[index] = {title, body, userId};
    dispatch(updateUser(newArray));
    setButtonType(!buttontype);
  }
  function handleDelete(value: number): void {
    dispatch(deleteUser(value));
  }
  function handleEdit(Index: number, item: any): void {
    setButtonType(false);
    setTitle(item.title);
    setUserId(item.userId);
    setBody(item.body);
    setindex(Index);
  }
  function handleTitle(value: string): void {
    setTitle(value);
  }
  function handleBody(value: string): void {
    setBody(value);
  }
  function handleUserId(value: string): void {
    setUserId(value);
  }

  const onRender = ({item, index}: renderItemTypes) => {
    return (
      <View style={styles.card}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => handleEdit(index, item)}>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(index)}>
            <Image
              source={require('../../assets/delete.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="title"
          style={styles.input}
          value={title}
          onChangeText={handleTitle}
        />
        <TextInput
          placeholder="body"
          style={styles.input}
          value={body}
          onChangeText={handleBody}
        />
        <TextInput
          placeholder="userId"
          style={styles.input}
          value={userId}
          onChangeText={handleUserId}
        />
        <View style={styles.btnview}>
          {buttontype ? (
            <TouchableOpacity onPress={handleAdd} style={styles.btn}>
              <Text>ADD</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleUpdate} style={styles.btn}>
              <Text>Update</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        data={list}
        renderItem={onRender}
        contentContainerStyle={{paddingBottom: 50}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    alignItems: 'center',
  },
  input: {
    margin: 5,
    top: '30%',
    height: 50,
    padding: 10,
    width: '90%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
  },
  btnview: {
    marginTop: '30%',
    flexDirection: 'row',
  },
  btn: {
    margin: 5,
    width: 70,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 6,
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'aqua',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 2,
  },
});
