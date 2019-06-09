import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import MarketBlock from './MarketBlock'

class MarketContainer extends Component {
  //No APIs provide market volumes etc. so it's hardcoded.
  render() {
    return (
      <View contentContainerStyle={coinContainer}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('BitMax');
        }}>
          <MarketBlock
            key ="0"
            name="BitMax"
            image="MAX"
            volume="46.4b"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Coinbene');
        }}>
          <MarketBlock
            key ="1"
            name="Coinbene"
            image="BENE"
            volume="39.3b"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('HitBTC');
        }}>
          <MarketBlock
            key ="2"
            name="HitBTC"
            image="HIT"
            volume="34.8b"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('OKEx');
        }}>
          <MarketBlock
            key ="3"
            name="OKEx"
            image="OKEX"
            volume="64.0b"
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  coinContainer: {
    paddingBottom: 50,
    marginTop: 10
  }
}

const { coinContainer } = styles;

export default MarketContainer
