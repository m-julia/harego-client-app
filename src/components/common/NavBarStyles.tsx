import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: '#37474f',
      margin: 0,
    },
    menuButton: {
      marginRight: theme.spacing(5),
      

    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
      paddingLeft: '5%'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
  })
);

export default styles;
