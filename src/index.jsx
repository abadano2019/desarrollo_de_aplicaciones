import { AddItem, CustomModal, TaskList } from './components';
import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import { colors } from './constants/theme/colors';
import { styles } from './styles';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [done, setDone] = useState(false)
  

  const onHandlerChange = (text) => {
    setTask(text)
  }

  useEffect (() => {
    
  });

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
        state: false,
        creationDate: new Date().toDateString(),
        finishDate: "",
      }
    ]);
    setTask('');
  }

  const onHandlerTask = (item) =>{
        
    if (item.state){
      item.state= false
      item.finishDate=""
    }
    else{
      item.state= true
      item.finishDate= new Date().toDateString()
    }
    done? setDone(false):setDone(true)
    
  }

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible)
    setSelectedTask(item);
  }
  
  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  }

  const onHandleDelete = () => {
    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setIsModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <AddItem 
        buttonColor={colors.primary}
        buttonText='Add'
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder='add a new task'
        task={task}
      />
      <TaskList 
        tasks={tasks}
        onHandlerModal={onHandlerModal}
        onHandlerTask={onHandlerTask}
        doneTask={done}
      />
     <CustomModal 
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
        
     />
    </View>
  );
}


export default App;