import React, {useState} from 'react';
import {StyleSheet,View,FlatList,Button,Alert} from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';
import { GlobalCount } from './src/AddToDo';



export default App = () => {
  
  const [todos,setTodos] = useState([]); // create Hook добавления данных

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
  const [on,serOn] = useState(false);

  return(
    <View style={ on ? styles.alter : styles.container}>
      <Navbar title='Application'/>
      <Button 
      style={styles.countFalse}
      onPress={() => serOn(!on) }
      title='Изменить тему'
      />
      <Button 
      onPress={GlobalCount}
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
  container:{
    flex: 1,
    backgroundColor: '#d4d6ff',
    color: '#fff'
  },
  alter:{
    flex: 1,
    backgroundColor: '#fff',
  },
  paddingScrol:{
    paddingHorizontal: 20,
  },
  countTrue:{
    color: 'red',
  },
})