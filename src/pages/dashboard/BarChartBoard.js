import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getBarChartData } from '../../store/barchartdata/actions'


const data = [
    {
        id : 1,
        customerId: 1,
        customerName: "test 1",
        saleAmount: 100 
    },
    {
        id : 2,
        customerId: 2,
        customerName: "test 2",
        saleAmount: 20 
    },
    {
        id : 3,
        customerId: 2,
        customerName: "test 2",
        saleAmount: 100 
    },
    {
        id : 4,
        customerId: 3,
        customerName: "test 3",
        saleAmount: 100 
    },
    {
        id : 5,
        customerId: 3,
        customerName: "test 3",
        saleAmount: 100 
    }
]

class BarChartBoard extends Component {
    constructor(props){
      super(props);
      this.state = {
        finalData: []
      }
    }

    componentDidMount(){
        this.props.getBarChartData();
        this.setSampleData();
    }

    setSampleData = () =>{
        if(data)
        {
            const arr = []   
            data.map((item) => {
                if(arr && arr.length > 0)
                {
                    let currentItemIndex = arr.findIndex(x => x.customerId == item.customerId)
                    if(currentItemIndex > -1)
                    {
                        arr[currentItemIndex].saleAmount = arr[currentItemIndex].saleAmount + item.saleAmount;
                    }
                    else
                    {
                        arr.push(item);   
                    }
                }
                else {
                    arr.push(item);   
                }
            })

            
            this.setState({
                finalData : arr
            })
        }
    }

    render () {
        return (
            <div>
                Bar Chart : 
                <BarChart width={730} height={250} data={this.state.finalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="customerName" />
                    <YAxis dataKey="saleAmount"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="saleAmount" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  
})

const mapDispatchtoProps = dispatch => {
  return {
        getBarChartData: () => dispatch(getBarChartData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(BarChartBoard)