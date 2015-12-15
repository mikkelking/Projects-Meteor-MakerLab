User = React.createClass({
	render(){
		let styles = {
			imgwall:{
				width:'100%'
			}
		};
		return (
			<h1>wellcome{this.getName()}</h1>
		)
	},
	getName(){
		return Meteor.user().username;
	}
})