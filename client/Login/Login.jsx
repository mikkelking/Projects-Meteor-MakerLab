const {
	TextField,
	RaisedButton,
	Tabs,
	Tab,
	Paper
} = MUI;
Login = React.createClass({
	_onSubmitLogin(event){
		event.preventDefault();

		//文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
		//需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
		let username = this.refs.loginname.getValue().trim();
		let password = this.refs.loginpassword.getValue().trim();
		

		Meteor.loginWithPassword(username,password,(err)=>{
            if (err) {
            	console.log(err);
				alert("failed");
				return;
            }else{
            	this.props.history.replaceState(null, '/home');
            }
        });
	},
	_onSubmitRegister(event){
		event.preventDefault();

		//文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
		//需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
		let name = this.refs.name.getValue().trim();
		let password = this.refs.password.getValue().trim();
		let rePassword = this.refs.rePassword.getValue().trim();

		if (password === rePassword) {

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
		}else{
			alert('Password is diff!')
		};

	},
	render(){
		const styles = {
			paper:{
				height:'20rem',
				width:'60%',
				margin:'10rem auto'
			}
		}
		return(
			<Paper zDepth={2} > 
				<Tabs style={styles.paper}>
					  <Tab label="登录" >
					  	<form onSubmit={ this._onSubmitLogin }>
					        <TextField
					            ref="loginname"
					            type='string'
					            floatingLabelText="Username" />	          
					        <TextField
					            ref="loginpassword"
					            type='password'
					            floatingLabelText="Password" />

					        <RaisedButton			           			            
					            type="submit"
					            label="登录"
					            secondary={true} />
				    	</form>
					  </Tab>
					  <Tab label="注册" >
					  	<form onSubmit={ this._onSubmitRegister }>
					        <TextField
					            ref="name"
					            type='string'
					            floatingLabelText="Username" />	          
					        <TextField
					            ref="password"
					            type='password'
					            floatingLabelText="Password" />
					        <TextField
					            ref="rePassword"
					            type='password'
					            floatingLabelText="Password" />
					        <RaisedButton			           			            
					            type="submit"
					            label="注册"
					            secondary={true} />
				    	</form>
					  </Tab>				
				</Tabs>
			</Paper>

			
		);
	}
})