import React, {useState} from 'react';
import {StyleSheet,View,FlatList,Button,Alert} from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';
import { GlobalCount } from './src/AddToDo';

export default App = () => {
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
      'Это действие нельзя отменить...',
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
    }
  })
  return(
    <View style={styleRandom.bgC}>
      <Navbar title='Application'/>
      <Button 
      style={styles.countFalse}
      onPress={random}
      title='Изменить тему 1 раз'
      disabled={dis}
      />
      <Button 
      onPress={ GlobalCount}
      title='Начать подсчёты заново'
      />
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
}) 