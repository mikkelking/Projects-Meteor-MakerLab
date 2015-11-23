// const {Link} = ReactRouter;
const {Tabs,Tab} = MUI;

App = React.createClass({
  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },
  render() {
    return (
      <div>
        <Tabs
          value={this.state.tabIndex}
          onChange={this._handleTabsChange}>
          <Tab
            value='1'
            label='HOME'
            route='/home'
           />
          <Tab
            value='2'
            label='PROJECT'
            route='/project'
           />
          <Tab
            value='3'
            label='TEAM'
            route='/team'
            />
        </Tabs>
        {this.props.children}
      </div>
    );
  },
  _getSelectedIndex() {
    return this.props.history.isActive('/home') ? '1' :
      this.props.history.isActive('/project') ? '2' :
      this.props.history.isActive('/team') ? '3' : '0';
  },

  _handleTabsChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route);
    this.setState({tabIndex: this._getSelectedIndex()});
  }
});