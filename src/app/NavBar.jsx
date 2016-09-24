import React from 'react';
import {Link, IndexLink} from 'react-router';
import LoginForm from './component/LoginForm'

export default class NavBar extends React.Component{
    render(){
        let items = [{id: 1, text: '首頁', dropdown: false, link: '/', home: true}, 
                    {id: 2, text: '進度頁面', dropdown: false, link: '/store', home: false}];
        return (
            <div className="nav-bar">
                <div className="inner">
                    <a href="#"><img src="src/images/logo.png" /></a>
                    <ul className="nav-ul">
                    {
                        items.map((item) =>{
                            let route;
                            if(item.home)
                                route = <IndexLink to={item.link}>{item.text}</IndexLink>;
                            else
                                route = <Link to={item.link}>{item.text}</Link>;
                            return <li key={item.id} className="nav-li">{route} </li>;
                        })
                    }
                        <li className="dropdown nav-li">
                            <a className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b>會員登入</b>
                                <span className="caret"></span>
                            </a>
                            <LoginForm />
                        </li>
                    </ul>
                </div>
            </div>    
        );
    }
}
