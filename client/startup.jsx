const {
	Router,
	Route,
	IndexRoute
} = ReactRouter;

const createHistory = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();
// there is different way to use history from "require('history')"

const Routes = (
	<Route path='/' component={App}>
		<Route path='home' component={Home} />
		<Route path='project' component={Project} />
		<Route path='team' component={Team} />
		<IndexRoute component={Home} />
	</Route>
		//顶级 <Route/> 中包含多个子 <Route/>,通过 <IndexRoute /> 来指定默认项。
);

Meteor.startup(function () {
	ReactDOM.render((
  		<Router history={createHistory}>
  			{Routes}
  		</Router>
	), document.getElementById('container'));
});