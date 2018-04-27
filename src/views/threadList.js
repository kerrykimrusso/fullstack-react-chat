import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThreadList extends Component {
  static propTypes = {
    threads: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      participants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })),
      messages: PropTypes.shape({
        byId: PropTypes.object,
        ordered: PropTypes.arrayOf(PropTypes.string),  
      }).isRequired,
      timestamp: PropTypes.number.isRequired,
    })).isRequired,
    onThreadClicked: PropTypes.func.isRequired,
    onNewThreadBtnClicked: PropTypes.func.isRequired,
  };

  onNewThreadBtnClicked = (e) => {
    this.props.onNewThreadBtnClicked();
  };

  render() {
    const { 
      threads,
      onThreadClicked,
    } = this.props;

    return (
      <div style={{width:'25%', margin:'40px', border:'3px solid #000', padding:'16px'}}>
        <h1>Chats <button onClick={this.onNewThreadBtnClicked}>New Thread</button></h1>
        <ul style={{listStyle:'none'}}>
          {threads.length > 0 && 
            threads.map(thread => {
              return thread.participants.length && thread.messages.ordered.length
                ? <li 
                    key={thread.id} 
                    onClick={() => onThreadClicked(thread.id)}
                  >
                    <h3>{thread.participants.map(p => p.name).join(', ')}</h3>
                    <p>{thread.messages.ordered.length > 0 && 
                      thread.messages.byId[thread.messages.ordered[thread.messages.ordered.length - 1]].content}</p>
                  </li>
                : null
            })
          }
        </ul>
      </div>
    );
  }
}