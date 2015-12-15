const {
	Card,
	CardHeader,
	CardMedia,
	CardTitle,
	CardActions,
	CardText,
	Avatar
} = MUI;

Project = React.createClass({
	render(){
		let styles={
			root:{
				paddingTop:'64px',
				backgroundColor:'#fafafa',
				minHeight:'50em'
			},
			hero:{
				backgroundColor:'#03A9F4',
				textAlign:'center',
				paddingTop:'55px',
				paddingBottom:'55px',
				marginBottom:'30px'
			},
			title:{
				fontSize:'48px',
				color:'#fff',
				marginBottom:'20px',
				lineHeight:1.1
			},
			circle:{
				margin:'0 auto',
				paddingTop:'100px',
				display:'block'
			}
	    };
		return (
			<div className='container page-content'>
				<ProjectList />
			</div>
		)
	}
})