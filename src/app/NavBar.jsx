import React from 'react';
import {Link, IndexLink} from 'react-router';
import ShortId from 'shortid';
import LoginForm from './component/LoginForm'

export default class NavBar extends React.Component{
    render(){
        let items = [{text: '首頁', dropdown: false, link: '/', home: true}, 
                    {text: '進度頁面', dropdown: false, link: '/edit', home: false},
                    {text: '店家', dropdown: false, link: '/store', home: false},
                    {text: '弱勢團體', dropdown: false, link: '/group', home: false},
                    {text: '編輯基本資料', dropdown: false, link: '/edit', home: false}];
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
                            return <li key={ShortId.generate()} className="nav-li">{route} </li>;
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
