import { FlatList } from "react-native";
import React from "react";
import TaskItem from "./item";
import { styles } from "./styles";

const TaskList = ({ tasks, onHandlerModal, onHandlerTask, doneTask}) => {

    const renderItem = ({ item }) => (
        <TaskItem 
            item={item}
            onHandlerModal={onHandlerModal}
            onHandlerTask={onHandlerTask}
            doneTask={doneTask}
        />
      )
    
    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
    )
}
export default TaskList;