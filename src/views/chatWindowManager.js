import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindow from '../connectors/chatWindow.connector';

const style = {
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
};

export default class ChatWindowManager extends Component {
  static propTypes = {
    openThreads: PropTypes.arrayOf(PropTypes.string),
  }
  
  state = {
    activeWindow: null,
  }  

  render() {
    const { openThreads } = this.props;
    return (
      <div style={style}>
        {openThreads.map(threadId => <ChatWindow key={threadId} threadId={threadId} />)}
      </div>
    );
  }
}