import React, {useState} from 'react';
import {StyleSheet,View,FlatList,Button,Alert} from 'react-native';
import { AddToDo } from '../src/AddToDo';
import { Todo } from '../src/Todo';
import { GlobalCount } from '../src/AddToDo';

export const Link = (props) => {
  const [todos,setTodos] = useState([]);
  // функция которая принимает параметр у TextImput добавляет к ней id и возвращат новый элемент ToDo
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title
      }
  ])
  }

  const removeTodo = id => {
    Alert.alert(
      'Действительно Удалить?!',
      'Это действительно нельзя отменить...',
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить Навсегда', onPress:() => setTodos(prev => prev.filter(todo => todo.id !== id)),
        }
      ]
    );
  }
  // Рандомизация
  let a = Math.floor(Math.random() * 5);
  let arr = ['#c1bdc9', '#ff9eb8', '#ff9eec', '#fde0ff','#ffa1f6','#d4d6ff'];
  const [str ,setStr] = useState('white');
      const random = () => {
        setStr(() => arr[a]);
        setDis(true);
      }
  const [dis,setDis] = useState(false);

  const styleRandom = StyleSheet.create({
    bgC:{
      flex: 1,
      backgroundColor:  str ,
    },
  })
  return(
    <View style={styleRandom.bgC}>
      {/* <Button 
      title='Назад<<'
      onPress={() => props.navigation.goBack() }
      /> */}
      <View style={styles.towButtons}>
      <Button 
      onPress={random}
      title='Изменить тему 1 раз'
      disabled={dis}
      />
      <Button 
      onPress={ GlobalCount}
      title='Начать подсчёты заново'
      />
      </View>
      <View style={styles.paddingScrol}>
      <AddToDo   onSubmit={addTodo}/>
      <FlatList 
      data={todos}
      renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
      />
      </View>
    </View>
  );
} 
const styles = StyleSheet.create({
  paddingScrol:{
    paddingHorizontal: 20,
  },
  towButtons:{
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

}) 