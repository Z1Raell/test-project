import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddGoods from '../Pages/AddGoods';
import Auth from '../Pages/Auth';
import GoodsList from '../Pages/GoodsList';
import Main from '../Pages/Main';


const Nav = () => {
    return (
        <>
           <Router>
               <div>
                   <ul><a href="/"> Main </a></ul>
                   <ul><a href="/list"> goods List </a></ul>
                   <ul><a href="/add"> Add Goods </a></ul>
                   <ul><a href="/auth"> Auth </a></ul>
               </div>
               <Switch>
                   <Route exact path="/" component={Main}></Route>
                   <Route exact path="/list" component={GoodsList}></Route>
                   <Route exact path="/add" component={AddGoods}></Route>
                   <Route exact path="/auth" component={Auth}></Route>
               </Switch>
           </Router>
        </>
        
    );
}

export default Nav;
