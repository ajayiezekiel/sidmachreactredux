import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx'
import {
    Grid,
    Card,
    Avatar,
    Typography,
    Button
  } from '@material-ui/core'
import { logout, selectUser } from '../../features/userSlice'
import { useStyles } from './Dashboard.styles'
import pics from '../../assets/images/user.jpg'

const Dashboard = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const classes = useStyles()
    const handleLogout = (e) => {
        e.preventDefault() 
        dispatch(logout())
    }

    return (
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
                <Card className={clsx(classes.root, classes.background)}>
                    <div className={clsx(classes.childflex, classes.details)}>
                        <Avatar alt="Remy Sharp" src={pics} className={clsx(classes.large, classes.margin)} />
                        <Typography variant='h6'color='primary' >Welcome {user.name}</Typography>
                        <Button
                            size="large"
                            className={clsx(classes.margin, classes.button)}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={(e) => handleLogout(e)}
                            >
                            Log out
                            </Button>
                    </div>
                </Card>       
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    )
}

export default Dashboard
