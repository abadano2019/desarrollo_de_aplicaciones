import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 50,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        borderTopColor: colors.primary,
        borderTopWidth: 1,
      },
      modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
      },
      modalDetailContainer: {
        padddingVertical: 1,
      },
      modalDetailMessage: {
        fontSize: 14,
        color: colors.textColorSecondary,
        fontWeight: 'bold',
        marginTop: 50
      },
      selectedTask: {
        fontSize: 14,
        color: colors.textColorSecondary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
      },
      modalButtonContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 20,
      },
      modalDialogContainer: {
        width: '70%',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
      }
      
});