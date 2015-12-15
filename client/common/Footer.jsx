const {
	Paper
} = MUI;

Footer = React.createClass({
	render(){
		let styles = {
			footer:{
				width:'100%',
				padding:'4rem 0',
				backgroundColor: '#0288D1',
				bottom:0
				
			},
			p:{
				margin: '0 auto',
	       		padding: 0,
        		color: 'rgba(255, 255, 255, 0.54)',
        		fontSize: '1em',
        		
			}
		}
		return (
			<Paper
				rounded={false}		
				zIndex={1}
				style={styles.footer}>
				<div className='container'>
					<p style={styles.p}>
						© 2015 by 奇点工作室
					</p>
				</div>
			</Paper>
		)
	}
})