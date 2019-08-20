import React, {Component} from 'react';

class App extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            fromCurrency:'',
            amount:'',
            toCurrency:'',
            rateArray:[],
            baseToTermCurrencies:[],
            finalResult:'',
            temp:'1'

        }
    }

     componentDidMount()
     {
       this.state.baseToTermCurrencies =[
        ['AUDAUD','1.1'],
        ['AUDCAD','USD'],
        ['AUDCNY','USD'],
        ['AUDCZK','USD'],
        ['AUDDKK','USD'],
        ['AUDEUR','USD'],
        ['AUDGBP','USD'],
        ['AUDJPY','USD'],
        ['AUDNOK','USD'],
        ['AUDNZD','USD'],
        ['AUDUSD','D'],
        ['CADAUD','USD'],
        ['CADCAD','1.1'],
        ['CADCNY','USD'],
        ['CADCZK','USD'],
        ['CADDKK','USD'],
        ['CADEUR','USD'],
        ['CADGBP','USD'],
        ['CADJPY','USD'],
        ['CADNOK','USD'],
        ['CADNZD','USD'],
        ['CADUSD','D'],
        ['CNYAUD','USD'],
        ['CNYCAD','USD'],
        ['CNYCNY','1.1'],
        ['CNYCZK','USD'],
        ['CNYDKK','USD'],
        ['CNYEUR','USD'],
        ['CNYGBP','USD'],
        ['CNYJPY','USD'],
        ['CNYNOK','USD'],
        ['CNYNZD','USD'],
        ['CNYUSD','Inv'], 
        ['CZKAUD','USD'],
        ['CZKCAD','USD'],
        ['CZKCNY','USD'],
        ['CZKCSZ','1.1'],
        ['CZKDKK','EUR'],
         ['CZKEUR','Inv'],
         ['CZKGBP','USD'],
         ['CZKJPY','USD'],
         ['CZKNOK','EUR'],
         ['CZKNZD','USD'],
         ['CZKUSD','EUR'],
         ['DKKAUD','USD'],
         ['DKKCAD','USD'],
         ['DKKCNY','USD'],
         ['DKKCZK','EUR'],
         ['DKKDKK','1.1'],
         ['DKKEUR','Inv'],
         ['DKKGBP','USD'],
         ['DKKJPY','USD'],
         ['DKKNOK','EUR'],
         ['DKKNZD','USD'],
         ['DKKUSD','EUR'],
         ['EURAUD','USD'],
         ['EURCAD','USD'],
         ['EURCNY','USD'],
         ['EURCZK','D'],
         ['EURDKK','D'],
         ['EUREUR','1.1'],
         ['EURGBP','USD'],
         ['EURJPY','USD'],
         ['EURNOK','D'],
         ['EURNZD','USD'],
         ['EURUSD','D'],
         ['GBPAUD','USD'],
         ['GBPCAD','USD'],
         ['GBPCNY','USD'],
         ['GBPCZK','USD'],
         ['GBPDKK','USD'],
         ['GBPEUR','USD'],
         ['GBPGBP','1.1'],
         ['GBPJPY','USD'],
         ['GBPNOK','USD'],
         ['GBPNZD','USD'],
         ['GBPUSD','D'],
         ['JPYAUD','USD'],
         ['JPYCAD','USD'],
         ['JPYCNY','USD'],
         ['JPYCZK','USD'],
         ['JPYDKK','USD'],
         ['JPYEUR','USD'],
         ['JPYGBP','USD'],
         ['JPYJPY','1.1'],
         ['JPYNOK','USD'],
         ['JPYNZD','USD'],
         ['JPYUSD','Inv'],
         ['NOKAUD','USD'],
         ['NOKCAD','USD'],
         ['NOKCNY','USD'],
         ['NOKCZK','EUR'],
         ['NOKDKK','EUR'],
         ['NOKEUR','Inv'],
         ['NOKGBP','USD'],
         ['NOKJPY','USD'],
         ['NOKNOK','1.1'],
         ['NOKNZD','USD'],
         ['NOKUSD','EUR'],
         ['NZDAUD','USD'],
         ['NZDCAD','USD'],
         ['NZDCNY','USD'],
         ['NZDCZK','USD'],
         ['NZDDKK','USD'],
         ['NZDEUR','USD'],
         ['NZDGBP','USD'],
         ['NZDJPY','USD'],
         ['NZDNOK','USD'],
         ['NZDNZD','1.1'],
         ['NZDUSD','D'],
         ['USDAUD','Inv'],
         ['USDCAD','Inv'],
         ['USDCNY','Inv'],
         ['USDCZK','EUR'],
         ['USDDKK','EUR'],
         ['USDEUR','Inv'],
         ['USDGBP','Inv'],
         ['USDJPY','D'],
         ['USDNOK','EUR'],
         ['USDNZD','Inv'],
         ['USDUSD','1.1']
    ];
        this.state.rateArray =[
            ['AUDUSD','0.8371'],
            ['CADUSD','0.8711'],
            ['USDCNY','6.1715'],
            ['EURUSD','1.2315'],
            ['GBPUSD','1.5683'],
            ['NZDUSD','0.7750'],
            ['USDJPY','119.95'],
            ['EURCZK','27.6028'],
            ['EURDKK','7.4405'],
            ['EURNOK','8.6651']
        ]

     }

     convertCurrency1(event,fromCurrency, toCurrency) 
     {
         this.setState({temp:1});
         this.convertCurrency(event,fromCurrency, toCurrency);
     }
     convertCurrency(event,fromCurrency, toCurrency) 
    {
        event.preventDefault();
        this.state.baseToTermCurrencies.find(element => 
            {
                let currentRecord = `${element}`;
                let record0 = currentRecord.split(',')[0];
                let record1 = currentRecord.split(',')[1];
                let fromTo = `${fromCurrency}`+`${toCurrency}`;
                let toFrom = `${toCurrency}`+`${fromCurrency}`; 
                if(record0 === fromTo)
                 {
                     this.calculateLogic(record1, fromTo, toFrom, fromCurrency, toCurrency)
                     let result = this.state.finalResult;
                 }
            })
    }

    calculateLogic(record1,fromTo, toFrom, fromCurrency, toCurrency) 
    {
        var result;
      
            if(record1 === '1.1')
            {
                result = this.state.amount *1;
                if(toCurrency === 'JPY')
                    result = result.toFixed(0);
                else
                    result = result.toFixed(2);
                    this.state.finalResult = result;
                this.setState({finalResult:result});
            }
            else if(record1 === 'D')
            {
                this.state.rateArray.map(rate =>
                    {
                        let currRate = `${rate}`;
                        if(currRate.split(',')[0] === fromTo)
                        {
                         result = this.state.amount * currRate.split(',')[1];
                         if(toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);
                         this.state.finalResult = result;
                         this.setState({finalResult:result});
                        }
                    })
            }
            else if(record1 === 'Inv')
            {
                this.state.rateArray.map(rate =>
                    {
                        let currRate1 = `${rate}`;
                        if(currRate1.split(',')[0] === toFrom)
                        {
                         result = this.state.amount * (1/currRate1.split(',')[1]);
                         if(toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);
                      this.state.finalResult = result;
                         this.setState({finalResult:result});
                        }
                    })
            }
            else{
                let fromCurr = fromCurrency;
                let toCurr = record1;
                this.convertCurrency(event, fromCurr, toCurr);
                let r1 = (this.state.temp * this.state.finalResult)/this.state.amount;
                this.state.temp= r1;
                let fromCurr1 = record1;
                let toCurr1 = this.state.toCurrency;
                this.convertCurrency(event, fromCurr1, toCurr1);
                let r2 =this.state.finalResult;
                result = (r1 * r2);
                if(this.state.toCurrency === 'JPY')
                         result = result.toFixed(0);
                     else
                         result = result.toFixed(2);

                this.setState({finalResult:result});


            }
        
    }
    render()
    {  
        return(
            <div>
                <h3> FX Calculator</h3>
        
        <form>
            <label for="fromCurrency">From:</label>
            <select id ="fromCurrency" onChange ={event => this.setState({fromCurrency: event.target.value})}>
                <option value="">--Select From Currency--</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CNY">CNY</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="USD">USD</option>
            </select>
            <label for="amount">Amount</label>
            <input type="text" id="amount" name="amount" placeholder="Amount" onChange ={event => this.setState({amount: event.target.value})}/>
    
            <label for="toCurrency">To:</label>
            <select id ="toCurrency" onChange ={event => this.setState({toCurrency: event.target.value})}>
                <option value="">--Select To Currency--</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CNY">CNY</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="USD">USD</option>
            </select>
            <input type ="submit" value ="Convert" onClick={event => {this.convertCurrency1(event,this.state.fromCurrency, this.state.toCurrency)}}></input>

            </form>

    
            
            {
                this.state.finalResult !=='' ?
                (
                    <div><h3>
                    {this.state.finalResult}
                    </h3>
                    </div>
                ):
                ("")
            }
            </div>
        );
    }
}



export default App;