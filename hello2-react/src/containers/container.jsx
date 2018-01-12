import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Counter from '../components/Counter'
import * as actionCreators from '../action/action'

const mapStateToProps = (state) => ({count: state})

const incrementCreator = (number) => ({type: 'INCREMENT', number})
const decrementCreator = (number) => ({type: 'DECREMENT', number})

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators,dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

