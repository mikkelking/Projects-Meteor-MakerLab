Form = React.createClass({
	getInitialState(){
		return {
			pj_id:'1'
		}
	},
	render(){
		return (
			<div className='form-page'>
				<FormContent info={this.state.pj_id}  />
			</div>
		)
	}
})