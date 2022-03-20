import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.tetx}</Text>
            </View>
            <Text>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>
    );
}
const styles = StyleSheet.create({
item:{
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
},

itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',

},
square:{
    width:24,
    height:24,
    backgroundColor:'blue',
    opacity:0.4,
    borderRadius:5,
    borderColor:'white',
    // marginRight:,
},

itemText:{
    maxWidth:'20%',
    padding:5,
    color:'red',
},

// circular:{
//     width:12,
//     height:12,
//     borderColor:'#55bcf6',
//     borderWidth:2,
//     borderRadius:5,
//     marginRight:15,
//     justifyContent:'space-between',
// },
});

export default Task;