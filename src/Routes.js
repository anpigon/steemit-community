import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./Pages/MainPage";

const AppRouter = () => (
	<Route>
		<Route exact path="/" component={MainPage} />
	</Route>
);
  
export default AppRouter;