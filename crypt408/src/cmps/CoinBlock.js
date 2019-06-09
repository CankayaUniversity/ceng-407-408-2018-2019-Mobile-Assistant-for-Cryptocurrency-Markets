import React from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { images } from '../Utility/CoinImages.js';


const CoinBlock = (props) => {
  return (
    <TouchableOpacity onPress={() => {
      Alert.alert('Markets');
    }}>
    <View style={container}>

        <View style={upperRow}>
            <Image
                  style={styles.image}
                  source={{ uri: images[props.symbol] }}
            />
            <Text style={coinName}>{props.name}</Text>
            <Text style={coinPrice}>{props.price}
                <Text style={moneySymbol}> $ </Text>
            </Text>
        </View>

        <View style={statisticsContainer}>

            <Text>24h:
                 <Text style={props.per < 0 ? percentChangeMinus : percentChangePlus }> {props.per} % </Text>
            </Text>
            <Text>Volume:
                <Text style={coinPrice}> ${props.vol}  </Text>
            </Text>

        </View>

    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 2
},
upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    padding: 5
},
coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
},
coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
    fontWeight: "bold"
},
seperator: {
    marginTop: 10,
},
coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
},
image: {
    width: 35,
    height: 35,
},
moneySymbol: {
    fontWeight: "bold",
},
statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
},
percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
},
percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
}
})

const {
container,
image,
moneySymbol,
upperRow,
coinSymbol,
coinName,
coinPrice,
statisticsContainer,
seperator,
percentChangePlus,
percentChangeMinus
} = styles;

export default CoinBlock;
