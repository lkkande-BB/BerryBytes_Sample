import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getBarChartData } from '../../store/barchartdata/actions'

class BarChartBoard extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }

    componentDidMount(){
        this.props.getBarChartData(1000);
    }

    getConvertedData = (data) => {
        if(data)
        {
            let arr = []   
            data.map((item) => {
                if(arr && arr.length > 0)
                {
                    let currentItemIndex = arr.findIndex(x => x.customerId == item.customerId)
                    if(currentItemIndex > -1)
                    {
                        let val = arr[currentItemIndex].sale_amount;
                        val = val + item.sale_amount;
                        arr[currentItemIndex].sale_amount = val;
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

            return arr;
        }
    }

    render () {
        return (
            <div>
                Bar Chart : 
                <BarChart width={1000} height={250} data={ this.getConvertedData(this.props.barChartDetails)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="customer_name" />
                    <YAxis dataKey="sale_amount"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sale_amount" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    barChartDetails: state.BarChart.barChartDetails
})

const mapDispatchtoProps = dispatch => {
  return {
        getBarChartData: (count) => dispatch(getBarChartData(count))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(BarChartBoard)