import React, {useState} from 'react';
import {StyleSheet,View,FlatList,Alert,TouchableOpacity,Text} from 'react-native';
import { AddToDo } from '../src/AddToDo';
import { Todo } from '../src/Todo';



export const Link = () => {
  const [todos,setTodos] = useState([]);
  // функция которая принимает параметр у TextImput добавляет к ней id и возвращат новый элемент ToDo
  const addTodo = title => {
    const  date = new Date();
    function monthD(){
      return date.getMonth() > 9 ? date.getMonth() + 1 : "0"+ (date.getMonth() + 1)
    }
    function dateD(){
     return date.getDate() > 9 ? date.getDate() :"0"+ date.getDate();
    }
    function houesesD(){
      return date.getHours() > 9 ? date.getHours() :"0"+ date.getHours();
    }
    function MinutesD(){
      return date.getMinutes() > 9 ? date.getMinutes() :"0"+ date.getMinutes();
    }
    function SecondsD(){
      return date.getSeconds() > 9 ? date.getSeconds() :"0"+ date.getSeconds();
    }
    setTodos(prev => [
      ...prev,
      {
      id: Date.now().toString(),
      title,
      date: dateD() + "." + monthD() + "." +date.getFullYear() + " в " + houesesD() + ":" +
      MinutesD() + ":" + SecondsD(),
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
  const [light,setLight] = useState(false);
  const tgg = () => {
    if(light){
      setLight(false);
    }else{
      setLight(true);
    }
  } 
  return(
    
    <View style={light ? styles.toggle1 : styles.toggle2}>
      <View style={styles.towButtons}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={()=> tgg()}
      >
        <Text style={{fontSize:20}}>Изменить тему</Text>
      </TouchableOpacity>
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
    width: '100%',
  },
  toggle1:{
    flex: 1,
    backgroundColor:'rgb(97,218,251)',
    color: 'white',
    paddingBottom: 100,
  },
  toggle2:{
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    backgroundColor: '#bfbfbf'
  },

}) 