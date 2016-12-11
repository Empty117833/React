import React from 'react'
import classNames from 'classnames'

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">        
        <span className="todo-count"><strong>{this.props.count}</strong> item left</span>        
        <ul className="filters">
          <li>
            <a className={classNames({selected:this.props.nowShowing=='all'})} href="#/all">All</a>
          </li>
          <li>
            <a className={classNames({selected:this.props.nowShowing=='active'})}  href="#/active">Active</a>
          </li>
          <li>
            <a className={classNames({selected:this.props.nowShowing=='completed'})} href="#/completed">Completed</a>
          </li>
        </ul>        
        {
          this.props.showClear ? (<button 
        className="clear-completed"
        onClick={this.props.clearCompleted}
        >Clear completed</button>):('')
        }
      </footer>
      )
  }
}
export default Footer