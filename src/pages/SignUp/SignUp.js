import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page'
import Paper from '@material-ui/core/Paper'
import React, { useState, useRef, useLayoutEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from 'base-shell/lib/providers/Auth'
import { useHistory, Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useMenu } from 'material-ui-shell/lib/providers/Menu'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { DateRange } from '@material-ui/icons'
import * as Yup from 'yup';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: `100%`,
  },
  arrow: {
    margin: '40px 371px 0px 16px',
    color: '#00d04c',
  },
  title: {
    width: '98px',
    height: '36px',
    margin: '61px 297px 31px 16px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '24px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  form: {
    margin: '0 16px 48px 16px',
  },
  label: {
    width: '66px',
    height: '24px',
    margin: '0px 0px 31px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '16px',
    fontWeight: '500',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  errorInfo: {
    width: '100%',
    height: '0px',
    margin: '16px 321px 55px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#ff3b30',
  },
  passwordInfo: {
    width: '169px',
    height: '24px',
    margin: '16px 211px 55px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#979797',
  },
  privacyInfo: {
    width: '-webkit-fill-available',
    height: '45px',
    margin: '16px 0px 0px',
    fontFamily: 'NotoSansCJKtc',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    color: '#232323',
  },
  submit: {
    width: '-webkit-fill-available',
    height: '48px',
    margin: '40px 0px 0px 0px',
    backgroundColor: '#00d04c',
    color: '#ffffff',
  },
})

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const { register, handleSubmit, errors, watch } = useForm()
  const password = useRef({});
  password.current = watch("password", "");
  const axios = require('axios');
  let responsedJSON;

  // API POST
  const onSubmit = async (data) => {
    console.log(data);
    await axios.post('https://gohiking-server.herokuapp.com/api/register', data)
    .then(function (response) {
      console.log('correct');
      responsedJSON = response.data
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.userId)
      history.push("/register0_1");
    })
    .catch(function (error) {
      console.log('error');
      responsedJSON = error.response.data;
    })
    .finally(function () {
      console.log(responsedJSON);
    });  
  }
 
  function backhandleClick() {
    history.push("/signin");
  }

  return (
    <div className={classes.container}>
      <ArrowBackIcon className={classes.arrow} onClick={backhandleClick} />
      <div className={classes.title}>????????????</div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} >
        <label className={classes.label}>????????????</label>
        <Input name="email" placeholder="?????????????????????" fullWidth inputRef={register({ required: true })} />
        <div className={classes.errorInfo}>{errors.email && "???????????????Email"}</div>
        <label className={classes.label}>??????</label><br />
        <Input name="password" type="password" placeholder="???????????????" fullWidth inputRef={
                                                                        register({ 
                                                                          required: true,
                                                                          minLength: 8
                                                                        })} />                                                             
        <div className={classes.errorInfo}>{errors.password && "??????????????????8???????????????"}</div>
        <label className={classes.label}>????????????</label><br />
        <Input placeholder="?????????????????????" name="password_repeat" type="password" fullWidth inputRef={register({ 
                                                                validate: value =>
                                                                value === password.current || "??????????????????" 
                                                                })} />
        <div className={classes.errorInfo}>{errors.password_repeat && <p>{errors.password_repeat.message}</p>}</div>
        <div className={classes.privacyInfo}>?????????????????????????????????????????????Go Hiking??????
        ???<span style={{ color: '#007aff' }}>???????????????</span>?????????<span style={{ color: '#007aff' }}>????????????</span>???
      </div>
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          ???????????????
        </Button>
      </form>
    </div>
  )
}

export default SignUp
