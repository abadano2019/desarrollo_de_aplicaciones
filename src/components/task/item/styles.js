import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/colors";

export const styles = StyleSheet.create(
  {
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 10,
        width: '25%',
      },
      itemTaskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
        marginBottom: 20,
        borderRadius: 10,
        width: '70%',
      },
      itemList: {
        fontSize: 12,
        color: colors.textColorPrimary,
        fontWeight: 'bold'
      },
      itemTouchableContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 20,
      },
})