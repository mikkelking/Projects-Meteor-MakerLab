injectTapEventPlugin();

const {
	Paper,
	TextField,
	Checkbox,
	RaisedButton
} = MUI;

FormContent = React.createClass({
	getInitialState(){
		return {
			pj_id: this.props.pj_id
		}
	},
	_onSubmit(event){
		event.preventDefault();

		//文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
		//需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。
		let information = {
			pj_name : this.refs.pj_name.getValue().trim(),
			team_name : this.refs.team_name.getValue().trim(),
			tec_field : this.refs.tec_field.getValue().trim(),
			about : this.refs.about.getValue().trim(),
			descrip : this.refs.description.getValue()
		}
		

		Meteor.call('declare',information,(err) => {
			if (err){
				console.log(err);
				alert("添加评论失败！");
				return;
			}
			this.refs.pj_name.clearValue();
			this.refs.team_name.clearValue();
			this.refs.tec_field.clearValue();
			this.refs.about.clearValue();
			this.refs.description.clearValue();
		});
	},

	render(){
		let styles = {
			Paper:{
				padding:'2rem 4rem'
			},
			Checkbox:{
				display:'block',
				width:'9rem',
				float:'left'
			},
			CheckGroup:{
				margin:'3rem auto',
				textAlign:'center',
				width:'80%'
			},
			TextField:{
		        display: 'block',
		        width: '100%',		        
		    },
		    textarea:{
		    	resize: 'none',
		    	width:'100%',
		    	height:'300px',
		    	maxlength:'500',
		    	placeholder:'详细描述：500字以内'
		    }
		
		}
		return (
			<div className='page'>
				<Paper
					style={styles.Paper} 
					zDepth={1}>
					<form onSubmit={ this._onSubmit }>
						<TextField
							ref='pj_name'
							style={styles.TextField}
		  					floatingLabelText="项目名称" />					
						<TextField
							ref='team_name'
							style={styles.TextField}	  				
		  					floatingLabelText="团队名称" />								
						<TextField
							ref='tec_field'
							style={styles.TextField}
		  					floatingLabelText="技术领域" />
		  				<TextField
							ref='about'
							style={styles.TextField}						
		  					floatingLabelText="一句话描述" />					
		  				<div className='clearfix' style={styles.CheckGroup}>
			  				<Checkbox
			  					style={styles.Checkbox}
								name="check0"					
								value="Internet"
								label="互联网"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check1"
							  	value="MI"
							  	label="移动互联网"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check2"
							  	value="IoT"
							  	label="物联网"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check3"
							  	value="cloudComputing"
							  	label="云计算"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check4"
							  	value="AI"
							  	label="人工智能"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check5"
							  	value="IT"
							  	label="软件服务"/>
							<Checkbox
								style={styles.Checkbox}
							  	name="check6"
							  	value="Culture"
							  	label="文化创意"/>
						  	<Checkbox
								style={styles.Checkbox}
							  	name="check7"
							  	value="EC"
							  	label="电子商务"/>
						  	<Checkbox
								style={styles.Checkbox}
							  	name="check8"
							  	value="other"
							  	label="其他"/>
		  				</div>
		  				<TextField
							ref='description'
							style={styles.TextField}
							multiLine={true}
							rows={5}
							rowsMax={7}
		  					floatingLabelText="项目说明" />
	  					<RaisedButton
					            style={styles.button}
					            labelStyle={styles.label}
					            type="submit"
					            label="提交评论"
					            secondary={true} />
		        	</form>
				</Paper>
			</div>
		)
	}
})