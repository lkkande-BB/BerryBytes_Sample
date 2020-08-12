import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie, PieChart, Tooltip } from 'recharts';
  
  const data=[
    {
      city:'Lucknow',
      state:'Uttar Pardesh',
      people:{
        male:2000,
        female:2200,
      }
    },
    {
      city:'Gorakhpur',
      state:'Uttar Pardesh',
      people:{
        male:1800,
        female:1500,
      }
    },
    {
      city:'Kanpur',
      state:'Uttar Pardesh',
      people:{
        male:1850,
        female:1700,
      }
    }
  ]

class PieChartBoard extends Component {
    constructor(props){
      super(props);
      this.state = {
          populationData: null
      }
    }

    componentDidMount(){
        this.setConvertedData();
    }

    setConvertedData = () =>{
        if(data)
        {
            let male = 0;
            let female = 0;
            data.map((item) => {
                male = male + item.people.male;
                female = female + item.people.female;
            })

            const arr = [
                {name: 'Male', value: male},
                {name: 'Female', value: female}
            ]
            this.setState({
                populationData : arr
            })
        }
    }

    render () {
        return (
          <div>
            Pie Chart : 
            <PieChart width={400} height={400}>
                { this.state. populationData && 
                    <Pie dataKey="value" isAnimationActive={false} data={this.state.populationData} cx={200} cy={200} outerRadius={100} fill="#8884d8" label />
                }
                <Tooltip />
            </PieChart>
          </div> 
        );
    }
}

const mapStateToProps = state => ({
  
})

const mapDispatchtoProps = dispatch => {
  return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(PieChartBoard)