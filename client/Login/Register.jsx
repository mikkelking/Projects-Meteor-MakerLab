const {
	TextField,
	RaisedButton,
	Tabs,
	Tab,
	SwipeableViews
} = MUI;
Register = React.createClass({

	_onSubmit(event){
		event.preventDefault();

		//文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
		//需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
		let name = this.refs.name.getValue().trim();
		let password = this.refs.password.getValue().trim();
		

		Accounts.createUser({username:name,password:password},(err) => {
			if (err){
				console.log(err);
				alert("failed");
				return;
			}
			this.refs.name.clearValue();
			this.refs.password.clearValue();
			this.props.history.replaceState(null, '/home');
		});
	},
	render(){
		return(<div>
					<Tabs style={{margin:'20rem 20rem'}}>
					  <Tab label="Tab One" >
					  	<h1>000001</h1>
					  </Tab>
					  <Tab label="Tab One" >
					  <h1>002222222</h1>
					  </Tab>				
					</Tabs>
					
				</div>
		);
	},

})