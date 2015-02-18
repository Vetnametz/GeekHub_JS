var FRIEND_LIST = [
  {name: 'Oleg'},
  {name: 'Max'},
  {name: 'Boris'},
  {name: 'Julia'},
  {name: 'Fernando'}
];

var HandleFriends = React.createClass({
  getInitialState: function() {
    return {removeSelectedEl: false};
  },
  handleRemoveLi: function () {
    //TODO: remove li.marked
    console.log('trigger at HandleFriends');
    this.setState({
      removeSelectedEl: true
    });
  },
  render: function() {
    console.log(this.state.removeSelectedEl);
    return (
      <div className="wrapper">
        <FriendsList friends={this.props.friends} />
        <ControlPanel onRemoveSelecteEl={this.handleRemoveLi}/>
      </div>
    );
  }
});

var FriendsList = React.createClass({

  render: function() {
    var rows = [];
    this.props.friends.forEach(function(friend) {
        rows.push(<Friend friend={friend} key={friend.name} />);
    });
    return (
      <ul className='friends-list'>
        {rows}
      </ul>
    );
  }
});


var Friend = React.createClass({
  getInitialState: function() {
    return {marked: false};
  },
  markName: function(event) {
    this.setState({
      marked: !this.state.marked
    });
  },
  render: function() {
    var name = this.props.friend.name,
        marked = this.state.marked ? 'marked' : 'unmarked';
    return (
      <li>
        <span className={marked}>{name}</span>
        <a onClick={this.markName} href="#">Mark for Removal</a>
      </li>
    );
  }
});

var ControlPanel = React.createClass({
  handleRemoveSelectedEl: function () {
    //pass click event from child (ControlPanel) node to parent (HandleFriends)
    this.props.onRemoveSelecteEl();
  },
  render: function() {
    return (
      <ul className='control-panel'>
        <AddNewFriend />
        <RemoveSelectedFriends  onRemove={this.handleRemoveSelectedEl} />
      </ul>
    );
  }
});

var RemoveSelectedFriends = React.createClass({
  handleRemove: function () {
    //pass click event from child (RemoveSelectedFriends) node to parent (ControlPanel)
    this.props.onRemove();
  },
  render: function() {
    return (
        <li className='remove' onClick={this.handleRemove}>Remove selected friends</li>
    );
  }
});

var AddNewFriend = React.createClass({
  render: function() {
    return (
      <li>Add friend</li>
    );
  }
});

React.render(<HandleFriends friends={FRIEND_LIST} />, document.body);