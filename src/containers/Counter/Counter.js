import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFive}  />
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
        onIncrementCounter: () => dispatch({type: types.INCREMENT}),
        onDecrementCounter: () => dispatch({type: types.DECREMENT}),
        onAddFive: () => dispatch({type: types.ADD, value: 5}),
        onSubFive: () => dispatch({type: types.SUBTRACT, value: 5}),
        onStoreResult: (counter) => dispatch({type: types.STORE_RESULT, counter: counter}),
        onDeleteResult: (id) => dispatch({type: types.DELETE_RESULT, id: id}),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);