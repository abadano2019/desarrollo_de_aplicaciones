import { Button, Modal, Text, View } from 'react-native'

import React from "react";
import { styles } from "./styles";

const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete}) => {
    return (
        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          
          <View style={styles.modalDetailContainer}>
            
            <Text style={styles.selectedTask}>
              {"Task name: " + selectedTask?.value}
            </Text>
            <Text style={styles.selectedTask}>
              {"State: "}
              {selectedTask?.state? "Done" : "Pending"}
            </Text>
            <Text style={styles.selectedTask}>
              {"Creation date: "}
              {selectedTask?.creationDate}
            </Text>
            <Text style={styles.selectedTask}>
              {"Done date: "}
              {selectedTask?.finishDate}
            </Text>
            
          </View>
          
          <View style={styles.modalDialogContainer}>
            <View>
              <Text style={styles.modalDetailMessage}>Delete this Task?</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button 
                title='Cancel'
                color='#626893'
                onPress={onHandleCancel}
              />
              <Button
                title='Delete'
                color='red'
                onPress={onHandleDelete}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
}

export default CustomModal;