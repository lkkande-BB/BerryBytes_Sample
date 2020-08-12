import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { signUp } from '../../store/auth/actions';

const useStyles = theme => ({
    paper: {
      margin: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }

    componentDidMount(){
    }

    render () {
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item elevation={6}>
                    <div className={ classes.paper }>
                        <Typography align='left' variant="h5">
                            Sign Up
                        </Typography>
                        <Formik initialValues={ { name:'',email : '' ,city : '', password : '' } } 
                          onSubmit={ (values, { setSubmitting }) => {
                            setSubmitting(true);
                            const payload = {
                              name: values.name,
                              email: values.email,
                              password: values.password,
                              city: values.city
                            }
                            this.props.signupAction(payload)
                            this.props.history.push('/dashboard')
                          } }
                          validationSchema = { 
                            Yup.object().shape({
                              name : Yup.string().min(2,'Too Short!').max(30,'Too Long!').required('Please enter your Name'),
                              email : Yup.string().email().required('Please enter your Email'),
                              city : Yup.string().min(2,'Too Short!').max(30,'Too Long!').required('Please enter your City'),
                              password: Yup
                                          .string().min(8,'Too Short!').max(30,'Too Long!')
                                          .required('Please Enter your password')
                                          .matches(
                                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                                            "Minimum 8 characters which contain at least one Uppercase, Lowercase, Number and Special Character"
                                          )
                            }) }>
                            {
                              (props) => {
                                const {
                                  values,
                                  touched,
                                  errors,
                                  dirty,
                                  isSubmitting,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  handleReset,
                                  isValid,
                                } = props;
                                return (
                                    <form onSubmit={ handleSubmit } >
                                      <Grid container direction="column">
                                        <Grid item>
                                            <TextField 
                                              id="name" 
                                              autoFocus
                                              error={ errors.name && touched.name }
                                              label='Name' 
                                              name="name" 
                                              color='primary'
                                              onChange={ handleChange } 
                                              value={ values.name }
                                              onBlur={ handleBlur }
                                              helperText={ (errors.name && touched.name) && errors.name }
                                              margin="normal"
                                              fullWidth
                                              variant='outlined'  
                                            />
                                          </Grid>
                                      <Grid item>
                                        <TextField 
                                          id="email" 
                                          error={ errors.email && touched.email }
                                          label='Email' 
                                          name="email" 
                                          color='primary'
                                          onChange={ handleChange } 
                                          value={ values.email }
                                          onBlur={ handleBlur }
                                          helperText={ (errors.email && touched.email) && errors.email }
                                          margin="normal"
                                          fullWidth
                                          variant='outlined'  
                                        />
                                      </Grid>
                                      <Grid item>
                                        <TextField 
                                            id="city" 
                                            error={ errors.city && touched.city }
                                            label='City' 
                                            name="city" 
                                            color='primary'
                                            onChange={ handleChange } 
                                            value={ values.city }
                                            onBlur={ handleBlur }
                                            helperText={ (errors.city && touched.city) && errors.city }
                                            margin="normal"
                                            fullWidth
                                            variant='outlined'  
                                          />
                                      </Grid>
                                      <Grid item>
                                        <TextField 
                                            id="password" 
                                            error={ errors.password && touched.password }
                                            label='Password' 
                                            name="password" 
                                            color='primary'
                                            onChange={ handleChange } 
                                            value={ values.password }
                                            onBlur={ handleBlur }
                                            type='password'
                                            helperText={ (errors.password && touched.password) && errors.password }
                                            margin="normal"
                                            fullWidth
                                            variant='outlined'  
                                          />
                                      </Grid>
                                      <Grid item>
                                        <Button
                                          variant="contained"
                                          type='submit'
                                          color='primary'
                                          align='center'
                                          className="w-100"
                                          disabled={ !Boolean(isValid && dirty) }
                                        >
                                            Sign Up
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    </form>
                                )
                              }
                            }
                        </Formik>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
  
})

const mapDispatchtoProps = dispatch => {
  return {
      signupAction : (payload,history) => dispatch(signUp(payload)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(withStyles(useStyles)(SignUp)) 