import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Alert, Picker, Button } from 'react-native';
// FEES, WHICH MARKET
class AssistantContainer extends Component{
  state = { coinpair: 'btcusd', CBene: [], OKEx: [], BitMax: [], HitBTC: [] }
  updatePair = (coinpair) => {
      this.setState({ coinpair: coinpair })
  }
  handleClick = () => {
    if(this.state.coinpair === "btcusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=BTCUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/BTC-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/BTCUSD').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=BTC-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "ethusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=ETHUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/ETH-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/ETHUSD').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=ETH-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "ethbtc")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=ETHBTC').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/ETH-BTC/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/ETHBTC').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=ETH-BTC').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "etcusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=ETCUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/ETC-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/ETCUSD').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=ETC-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "etcbtc")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=ETCBTC').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/ETC-BTC/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/ETCBTC').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=ETC-BTC').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "ltcusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=LTCUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/LTC-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/LTCUSD').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=LTC-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "ltcbtc")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=LTCBTC').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/LTC-BTC/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/LTCBTC').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=LTC-BTC').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "xrpusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=XRPUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/XRP-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/XRPUSDT').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=XRP-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "xrpbtc")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=XRPBTC').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/XRP-BTC/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/XRPBTC').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=XRP-BTC').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "xlmusd")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=XLMUSDT').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/XLM-USDT/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/XLMUSD').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=XLM-USDT').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else if(this.state.coinpair === "xlmbtc")
    {
      var bidArr = [];
      var askArr = [];
      fetch('http://api.coinbene.com/v1/market/ticker?symbol=XLMBTC').then((response) => response.json()).then((responseData) => {
          this.setState({
              CBene: responseData.ticker
          });
          console.log(this.state.CBene["0"]["bid"]);
          bidArr.push(parseFloat(this.state.CBene["0"]["bid"]));
          askArr.push(parseFloat(this.state.CBene["0"]["ask"]));
      }).then(()=>{
          fetch('https://www.okex.com/api/spot/v3/instruments/XLM-BTC/ticker').then((response) => response.json()).then((responseData) => {
          this.setState({
              OKEx: responseData
          });
          console.log(this.state.OKEx.bid);
          bidArr.push(parseFloat(this.state.OKEx.bid));
          askArr.push(parseFloat(this.state.OKEx.ask));
          console.log(bidArr);
       }).then(()=>{
           fetch('https://api.hitbtc.com/api/2/public/ticker/XLMBTC').then((response) => response.json()).then((responseData) => {
           this.setState({
               HitBTC: responseData
           });
           console.log(this.state.HitBTC.bid);
           bidArr.push(parseFloat(this.state.HitBTC.bid));
           askArr.push(parseFloat(this.state.HitBTC.ask));
           console.log(bidArr);
     }).then(()=>{
         fetch('https://bitmax.io/api/v1/quote?symbol=XLM-BTC').then((response) => response.json()).then((responseData) => {
         this.setState({
             BitMax: responseData
         });
         console.log(this.state.BitMax.bidPrice);
         bidArr.push(parseFloat(this.state.BitMax.bidPrice));
         askArr.push(parseFloat(this.state.BitMax.askPrice));
         console.log(bidArr);
         console.log(Math.max(...bidArr));
         console.log(Math.min(...askArr));
      }).done();
      }).done();
      }).done();
    }).done();
    }
    else Alert.alert("siego");
  }


render() {
  return (
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Select the pair you want to operate:</Text>
        <Picker style={{ height: 50, width: 150 }} mode = 'dropdown' selectedValue = {this.state.coinpair} onValueChange = {this.updatePair}>
             <Picker.Item label = "BTC/USD" value = "btcusd" />
             <Picker.Item label = "ETH/USD" value = "ethusd" />
             <Picker.Item label = "ETH/BTC" value = "ethbtc" />
             <Picker.Item label = "ETC/USD" value = "etcusd" />
             <Picker.Item label = "ETC/BTC" value = "etcbtc" />
             <Picker.Item label = "LTC/USD" value = "ltcusd" />
             <Picker.Item label = "LTC/BTC" value = "ltcbtc" />
             <Picker.Item label = "XRP/USD" value = "xrpusd" />
             <Picker.Item label = "XRP/BTC" value = "xrpbtc" />
             <Picker.Item label = "XLM/USD" value = "xlmusd" />
             <Picker.Item label = "XLM/BTC" value = "xlmbtc" />
        </Picker>
        <TouchableNativeFeedback
          onPress={this.handleClick}
        >
          <View style={{width: 100, height: 30, backgroundColor: 'grey', alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Find chains</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

}

export default AssistantContainer
