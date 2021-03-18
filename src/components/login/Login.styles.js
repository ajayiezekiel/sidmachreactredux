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
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    margin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    textField: {
      width: '40ch',
      [theme.breakpoints.down('xs')]: {
        width: '30ch',
      },
    },
    button: {
      width: '38.5ch',
      [theme.breakpoints.down('xs')]: {
        width: '28.8ch',
      },
    },
    spinner: {
      height: '50px',
      width: '50px',
    },
  })
)
const firststyles = {
  media: {
    backgroundImage: 'none',
    display: 'none',
  },
}

const secondstyles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
}

export { firststyles, secondstyles, useStyles }
