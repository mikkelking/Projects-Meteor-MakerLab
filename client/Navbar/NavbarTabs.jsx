const {
	Tabs,
	Tab
} = MUI;

NavbarTabs = React.createClass({

	render(){
		let styles ={
			tabs: {
		        width: '16rem',	      
		        float:'right',
		        textTransform: 'uppercase'
		    },
	      	tab: {
		        height: 64,
		        color: '#FFF'
	      	},
	      	inkBar: {
		        backgroundColor: '#FFF',
		        height: '.4rem',
		        marginTop: '-4px'
		    },
		};
		return (
 			<Tabs 
          		style={styles.tabs}
          		value={this.props.tabIndex}
          		inkBarStyle={styles.inkBar}
          		tabItemContainerStyle={{backgroundColor: '#0288D1'}}
          		onChange={this.props.handleTabsChange}>
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
	          <Tab
	          	style={styles.tab}
	            value='4'
	            label='Login'
	            route={this.props.requireRoute()}
	            />
	          
	         	     	
	        </Tabs>
		)
	}	
})