import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Home from './Components/Home/Home';
import Login from './Components/Register_Login/Login';
import Register from './Components/Register_Login/Register';

import StudentCourses from './Components/StudentCourses/StudentCourses';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/studentCourses" component={StudentCourses} />
      </Layout>
    </Switch>
  );
}

export default App;
