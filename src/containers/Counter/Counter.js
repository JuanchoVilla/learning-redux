import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement, add, subtract, storeResult, deleteResult} from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddFive()}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubFive()}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => (
    { ctr: state.ctr.counter,
        storedResults: state.res.results }
)

const mapDispatchToProps = dispatch => (
    {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddFive: () => dispatch(add(5)),
        onSubFive: () => dispatch(subtract(5)),
        onStoreResult: (counter) => dispatch(storeResult(counter)),
        onDeleteResult: (id) => dispatch(deleteResult(id)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);