
DataPanel = React.createClass({
	render(){
		let styles ={
			bgcolor:{				
				height:'12rem',
				color:'#FFF',
				width:'60rem',
				margin:'0 auto'
			},
			datapanel:{
			    textAlign: 'center',
			    width: '20rem',
			    float: 'left',
			    margin:'2rem auto'			    
			},
			wrap:{
			    display: 'table-cell',
			    float: 'left',
			    width: '70%',
			    verticalAlign: 'middle'
			},
			h2:{			    
			    width: '30%',
			    float:'right'
			},
			p:{
				margin:0
			}
		};
		return (
			<div style={styles.bgcolor}>
				<div style={styles.datapanel}>
					<div style={styles.wrap}>						
						<img src='pageimage/Person64x64.png' />
						<p style={styles.p}>创客</p>
					</div>

					<h2 style={styles.h2}>117</h2>
				</div>
				<div style={styles.datapanel}>
					<div style={styles.wrap}>
						<img src='pageimage/team91x64.png' />
						<p style={styles.p}>团队</p>
					</div>
					<h2 style={styles.h2}>21</h2>
				</div>
				<div style={styles.datapanel}>
					<div style={styles.wrap}>
						<img src='pageimage/project64x64.png' />
						<p style={styles.p}>项目</p>
					</div>
					<h2 style={styles.h2}>21</h2>
				</div>
			</div>
		)
	}
})