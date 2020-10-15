import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../redux/actions/counter'

import {selectUserName, selectUserAge, selectUserNameAndAge} from "../../redux/selectors/counter";



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '2px 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    but: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));


function Counter(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Counter: {props.counter}<br/>
                    User Name: {props.name}<br/>
                    User Age: {props.age}<br/>
                    <br/>
                    Hello {props.nameAge}!<br/>
                </Typography>
            </CardContent>
            <CardActions>
                <div className={classes.but}>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="contained"
                    >
                        <Button onClick={() => props.increment()}>+</Button>
                        <Button onClick={props.decrement}>-</Button>
                    </ButtonGroup>
                </div>
            </CardActions>
        </Card>
    )
}
//todo mapStateToProps - ключ counter принимает значение state.counter:
// counter - props(которое передаваться будет в компонент Counter), connect() ->[props]-> (Counter)
// state.counter - значение props
const mapStateToProps = (state) => ({
    counter: state.counter,
    name: selectUserName(state),
    age: selectUserAge(state),
    nameAge: selectUserNameAndAge(state)
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)