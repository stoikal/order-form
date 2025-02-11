import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import OrderForm from './components/OrderForm';

const useStyles = makeStyles({
  container: {
    background: '#efefef',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    padding: '1em',
  },
  clamp: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  paper: {
    padding: '1em',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.clamp}> 
        <Typography variant="h5" component="h1" paragraph>
          Create Order
        </Typography>
        <Paper square className={classes.paper}>
          <OrderForm />
        </Paper>
      </div>
    </div>
  );
};

export default App;
