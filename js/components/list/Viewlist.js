import React, {
  Component,
  StyleSheet,
  Text,
  View,
}from 'react-native';

class Vielist extends Component {
render(){
  return(
   <View style={styles.container}>
   <Text style={styles.largeText}>
    show the acherya personal information.
   </Text>
   </View>
    )
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#dddfd4'
}
largeText: {
  flex: 1,
  fontsize: 52,
  fontFamily: "Helveticneue-CondensedBold",
  paddingTop: 40,
  paddingRight: 20,
  paddingLeft:20,
  color: "#173e43"
}
});

export default Vielist; 