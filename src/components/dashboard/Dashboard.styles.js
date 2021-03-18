import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: theme.spacing(4),
    },
    childflex: {
      flexGrow: 1,
      flexBasis: '0',
    },
    divide: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      backgroundColor: theme.palette.primary,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },

    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    padding: {
      padding: theme.spacing(3),
    },

    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    green: {
      color: '#0da293',
    },
    spinner: {
      display: 'inline-block',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      height: '50px',
      width: '50px',
      paddingLeft: '20px',
    },
  })
)

export { useStyles }
