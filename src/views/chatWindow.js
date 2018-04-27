import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  window: {
    width:'200px', 
    border:'1px solid #333',
    padding:'16px',
  }
};

class Autocomplete extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
    defaultValues: PropTypes.array,
    getDataKey: PropTypes.func,
    getDataName: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    dataSource: [],
    defaultValues: [],
    getDataKey: x => x.id,
    getDataName: x => x.name,
  }

  constructor(props) {
    super(props);

    this.state = {
      values: props.defaultValues,
    };
  }

  onChange = (e) => {
    const { onChange } = this.props;
    if(onChange) onChange(e.target.value);
  }

  onSelected = (e) => {
    // e.target.value;
  }

  render() {
    const { 
      dataSource,
      getDataKey,
      getDataName,
    } = this.props;

    const {
      values,
    } = this.state;

    return (
      <div>
        <div>
          <div class='newParticipants'>
            {values.map(val => <span>{val}</span>)}
          </div>
          <input type='text' name='invites' onChange={this.onChange} />
        </div>
        <select onChange={this.onSelected}>
          {dataSource.map(data => 
            <option key={getDataKey(data)} value={getDataKey(data)}>{getDataName(data)}</option>
          )}
        </select>
      </div>
    );
  }
}
export default class ChatWindow extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    participants: PropTypes.arrayOf(PropTypes.string),
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      sender: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })).isRequired,
    onSendMessage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    participants: [],
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSendMessage(e.target.message.value.trim());
    e.target.message.value = '';
  };

  render() {
    const { 
      contacts,
      participants,
      messages,
    } = this.props;
    
    const hasParticipants = participants.length === 0;

    return (
      <div style={style.window}>
        {hasParticipants 
          ? <h4>{participants.join(', ')}</h4>
          : <Autocomplete dataSource={contacts} />
        }
        <div style={{height:'400px'}}>
          {messages.length > 0 && 
            messages.map(message => <div key={message.id}>{message.sender.name}: {message.content}</div>)
          }
        </div>
        <form onSubmit={this.onSubmit}>
          <input type='text' name='message' disabled={!hasParticipants} />
          <button>Send</button>
        </form>
      </div>
    );
  }
}