import { Text, TouchableOpacity, View } from 'react-native'

import React from "react";
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal, onHandlerTask, doneTask }) => {

    return (
      <View style={styles.itemTouchableContainer}>
        <TouchableOpacity style={styles.itemTaskContainer} onPress={() => onHandlerModal(item)}>
          <Text style={styles.itemList}>{item.value}</Text>
        </TouchableOpacity>
        <TouchableOpacity doneTask={doneTask} style={[styles.itemContainer, item.state?{backgroundColor: '#076904'}:{backgroundColor: '#d44012'}  ]} onPress={() => onHandlerTask(item)}>
          <Text style={styles.itemList}>
            {item.state? "DONE" : "PENDING"}
          </Text>
        </TouchableOpacity>
      </View>
    
  
    )
}

export default TaskItem;