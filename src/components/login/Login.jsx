import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Visibility from '@material-ui/icons/Visibility'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { login } from '../../features/userSlice'
import user from '../../assets/images/general.jpg'
import { firststyles, secondstyles, useStyles } from './Login.styles'


const ValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})


const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: ValidationSchema,
        onSubmit: (e) => {
            setWaiting(true)
            dispatch(login({
                name: formik.values.name,
                email: formik.values.email,
                password: formik.values.password,
                loggedIn: true
            }))
    },
  })

  const [waiting, setWaiting] = useState(false)

  const [values, setValues] = useState({
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
            <Card className={classes.root}>
                <CardMedia
                className={clsx(classes.childflex)}
                image={user}
                title="front cover"
                style={matches ? firststyles.media : secondstyles.media}
                />
                <div className={clsx(classes.childflex, classes.details)}>
                    <Typography color="primary" variant="h5" className={classes.margin}>
                        Register Here
                    </Typography>
                    <form className={clsx(classes.details)} onSubmit={formik.handleSubmit}>
                        <TextField
                            required
                            className={clsx(classes.margin, classes.textField)}
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            variant="outlined"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            required
                            className={clsx(classes.margin, classes.textField)}
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {' '}
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={80}
                            />
                            <FormHelperText id="my-helper-text">
                                {formik.touched.password && formik.errors.password}
                            </FormHelperText>
                        </FormControl>
                        {waiting ? (
                            <div className={classes.spinner}>
                                <CircularProgress />
                            </div>
                        ) : (
                            <Button
                            size="large"
                            className={clsx(classes.margin, classes.button)}
                            variant="contained"
                            color="primary"
                            type="submit"
                            >
                            Sign Up
                            </Button>
                        )}
                    </form>
                </div>
            </Card>
        </Grid>
        <Grid item xs={false} sm={2} />
    </Grid>
    )
}

export default Login
