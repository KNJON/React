import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Counter from '../components/Counter'
import * as actionCreators from '../action/index'

//准备一般属性：count
const mapStateToProps = (state)=> ({count: state})

//定义创建actions对象的函数(action不能直接创建)

const incrementCreator = (number) => ({type: 'INCREMENT', number})
const decrementCreator = (number) => ({type: 'DECREMENT', number})

//准备函数属性： increment decrement
//bindActionCreators函数返回值是个对象
const mapDispatchToProps = (dispatch)=> bindActionCreators(actionCreators,dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
