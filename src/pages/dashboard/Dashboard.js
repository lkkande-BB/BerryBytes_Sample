import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChartBoard from './BarChartBoard';
import PieChartBoard from './PieChart';

class Dashboard extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }

    render () {
        const { classes, userDetails } = this.props;
        return (
            <Grid container direction="column">
              {
                userDetails && 
                <Grid item>
                  <Grid container direction="column">
                    <Grid item> Name : { userDetails.name }</Grid>
                    <Grid item> Email : { userDetails.email }</Grid>
                    <Grid item> City : { userDetails.city }</Grid>
                    <Grid item> Password : { userDetails.password }</Grid>
                  </Grid>
                </Grid>
              }

              <Grid item>
                <PieChartBoard />
              </Grid>
              <Grid item>
                <BarChartBoard />
              </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
  userDetails: state.SignUp.userDetails
})

const mapDispatchtoProps = dispatch => {
  return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(Dashboard)