import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Keyboard} from 'react-native';
import ToDo from './src/screens/ToDo';
import Done from './src/screens/Done';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Tab = createBottomTabNavigator();
function HomeTabs(){
    return(
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={
                ({route}) => ({
tabBarIcon:({focused, size, color}) => {
    let iconName; 
    if(route.name === 'ToDo'){
        iconName = 'clipboard-list';
        size = focused ? 25:20;
    }else if (route.name === 'Done'){
        iconName = 'clipboard-check';
        size = focused ? 25:20;
    }
    return(
        <FontIcon
        name={iconName}
        size={size}
        color={color}
        />
    );
}
                })
            }
            tabBarOPtions={{
                activeTintColor:'#0080ff',
                inactiveTintcolor:'#777777',
                labelStyle:{fontSize:15, fontWeight:'bold'}

            }}
            >
        <Tab.Screen name={'ToDo'} components = {ToDo}/>
        <Tab.Screen name={'Done'} components = {Done}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}
export default function App() {
   
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);                                         
    const  handleAddTask = () => { 
        Keyboard.dismiss();
        if (task != 0) {
            // Alert.alert('Warning!' + 'Please write your task.')
            setTaskItems([...taskItems, task])
            setTask('')
        }
        else {
            alert('Warning!' + 'Please write your task.')
        }
    }
    storeData = async => {
          AsyncStorage.setTask()
    }
   
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

  return(
      <View style={styles.container}>
          <View style={styles.tasksWrapper}>
              <Text style={styles.sectionTitle}>To-Do Tasks </Text>
              <View style={styles.items}>
                  {
                      taskItems.map((item,index)=>{
                          return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                  <Task text={item} />

                            </TouchableOpacity>
                    
                      )
                  })
                }
                  {/* <Task text={'Task 1'}/> */}
                  {/* <Task text={'Task 2'}/> */}
                  {/* <Task text={'Task 3'}/> */}
              </View>
          </View>
          <KeyboardAvoidingView
          behavior={Platform.Android === "Android" ?  "padding":"height"}
          style={styles.writeTaskWrapper}
          >
              <TextInput style={styles.input}placeholder={'write a task'} value={task}  onChangeText={text => setTask(text)}/>
              <TouchableOpacity onPress={() => handleAddTask()}>
                  <View style={styles.addWrapper}>
                      <Text style={styles.addText}>+</Text>
                  </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>
          
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
    },

    tasksWrapper:{
        paddingTop: 20,
        paddingLeft:10,
        paddingHorizontal: 20,
    },

    sectionTitle:{
        fontSize: 25,
        fontWeight:'bold',
        color:'white',
        paddingBottom:20,
        textAlign:'center',
    },

    items:{
        marginsTop:30,
    },

    writeTaskWrapper:{
        position:'absolute',
        bottom:60,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    
    input:{
        paddingHorizontal:15,
        paddingHorizontal:15,
        backgroundColor:'white',
        color:'black',
        borderRadius:60,
        borderColor:'grey',
        borderWidth:1,
        width:250,
    },

    addWrapper:{
        color:'black',
        width:60,
        height:60,
        backgroundColor:'white',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:1,
        
    },
    addText:{},
});


