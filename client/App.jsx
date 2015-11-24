// 官方推荐零时解决办法,请留意官网新动态
injectTapEventPlugin();

const {
	Tabs,
	Tab,
	Paper
} = MUI;

App = React.createClass({
  componentWillMount() {
    this.setState({
      tabIndex: this._getSelectedIndex()
    });
  },
  render() {
  	let styles={
	      paper: {
	        position: 'fixed',
	        height: 64,
	        top: 0,
	        right: 0,
	        zIndex: 4,
	        width: '100%',
	        backgroundColor:'#0288D1'
	      },
	      tabs: {
	        width: '300px',
	        position: 'absolute',
	        right: 60,
	        textTransform: 'uppercase'
	      },
	      tab: {
	        height: 64,
	        color: '#FFF'
	      },
	      // 
	      inkBar: {
	        backgroundColor: '#FFF',
	        height: '4px',
	        marginTop: '-4px'
	      }
  	};

    return (
      <div className='nav-bar'>
      	<Paper style={styles.paper}>
	        <Tabs 
          		style={styles.tabs}
          		value={this.state.tabIndex}
          		inkBarStyle={styles.inkBar}
          		tabItemContainerStyle={{backgroundColor: '#0288D1'}}
          		onChange={this._handleTabsChange}>
	          <Tab
	          	style={styles.tab}
	            value='1'
	            label='首页'
	            route='/home'
	           />
	          <Tab
	          	style={styles.tab}
	            value='2'
	            label='项目'
	            route='/project'
	           />
	          <Tab
	          	style={styles.tab}
	            value='3'
	            label='团队'
	            route='/team'
	            />
	        </Tabs>
	    </Paper>
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
    // console.log("1");
    this.props.history.pushState(null, tab.props.route);
    this.setState({
    	tabIndex: this._getSelectedIndex()
    });
  }
});