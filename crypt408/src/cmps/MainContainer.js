import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import FetchData from './../Actions/FetchData';
import CoinBlock from './CoinBlock';
import Spinner from 'react-native-loading-spinner-overlay';
import { withNavigation } from 'react-navigation';

class MainContainer extends Component {
  componentWillMount() {
    this.props.FetchData();
  }

  renderCoinBlock() {
    const { crypt } = this.props;
    return crypt.data.map((coin, index) =>
      <CoinBlock
        key={coin.id}
        symbol={coin.symbol}
        name={coin.name}
        price={coin.price_usd}
        vol={coin.market_cap_usd}
        per={coin.percent_change_24h}
      />
    )
  }

  render() {
    const { crypt } = this.props;
    if (crypt.isFetching) {
      return(
        <View>
          <Spinner
            visible={crypt.isFetching}
            animation="fade"
          />
        </View>
      )
    }
    return (
      <ScrollView contentContainerStyle={coinContainer}>
        {this.renderCoinBlock()}
      </ScrollView>
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

function mapStateToProps(state) {
  return {
    crypt: state.crypt
  }
}

export default connect(mapStateToProps, { FetchData })(MainContainer)
