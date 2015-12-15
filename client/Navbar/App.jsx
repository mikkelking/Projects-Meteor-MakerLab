// 官方推荐零时解决办法,请留意官网新动态

injectTapEventPlugin();

const {
	Tabs,
	Tab,
	Paper,
	FlatButton
} = MUI;

const {
	Link
} = ReactRouter;

App = React.createClass({
  getInitialState() {
    return {routeName: this._requireRoute()};
  },
  _requireRoute(){
    return Meteor.user() ? '/user' : '/login';
  },
  componentWillMount() {
    console.log('00000');
    this.setState({
      tabIndex: this._getSelectedIndex(),
      test:''
    });
  },
  render() {
  	let styles={
	      paper: {
	        position: 'fixed',
	        height: 64,
	        top: 0,
	        right: 0,
	        width: '100%',
	        paddingLeft:'10%',
	        paddingRight:'10%',
	        fontSize:'1rem',
	        backgroundColor:'#0288D1',	        
	      },
	      
	      login:{
	      	color:'#FFF',
      	    display: 'block',
		    width: '4rem',
		    textAlign: 'center',
		    textDecoration: 'none',
		    height: '64px',
		    lineHeight: '64px',
		    float: 'right',
		    marginLeft:'2rem'
	      },
	      logo:{
	      	display: 'table-cell',
		    textAlign: 'center',
		    verticalAlign: 'middle',
		    height: '64px',
		    color: '#FFF',
		    fontSize: '18px',
		    fontWeight: '900',
    		boxSizing: 'border-box',

	      }
  	};

    return (

      <div className='nav-bar'>
      	<Paper
      		rounded={false}
      		zIndex={1} 
      		style={styles.paper}> 

	       	<NavbarTabs 
            handleTabsChange={this._handleTabsChange}
	       		onHandleTabsChange={this._getSelectedIndex}
            requireRoute={this._requireRoute}
	       	/>

	        <div style={styles.logo}>
	        	MakerLab
	        </div>
	      </Paper>
        {this.props.children}
        <Footer />
      </div>
    );
  },
  _getSelectedIndex() {
    
    return this.props.history.isActive('/home') ? '1' :
      this.props.history.isActive('/project') ? '2' :
      this.props.history.isActive('/team') ? '3' :
      this.props.history.isActive('/login') ? '4' : '0';
  },

  _handleTabsChange(value, e, tab) {
    // console.log("1");
    this.props.history.pushState(null, tab.props.route);
    this.setState({
    	tabIndex: this._getSelectedIndex()
    });
  },
});