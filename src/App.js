import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import OrderDetails from "./component/orderDetails";
import Reschedule from "./component/reschedule";

const App = () => {
  return (
    <Switch>
      <Route path={"/orderDetails"} component={OrderDetails} />
      <Route path={"/reschedule"} component={Reschedule} />
      <Route>
        <Redirect to={"/orderDetails"} />
      </Route>
    </Switch>
  );
};

export default App;
