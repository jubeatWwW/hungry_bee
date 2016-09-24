import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class NavBar extends React.Component{
    render(){
        let items = [{id: 1, text: '首頁', dropdown: false, link: '/', home: true}, 
                    {id: 2, text: '進度頁面', dropdown: false, link: '/store', home: false}, 
                    {id: 3, text: '會員登入', dropdown: true, link: '/group', home: false}];
        return (
            <div className="nav-bar">
                <div className="inner">
                    <a href="#"><img src="src/images/logo.png" /></a>
                    <ul>
                    {
                        items.map((item) =>{
                            let route;
                            if(item.home)
                                route = <IndexLink to={item.link}>{item.text}</IndexLink>;
                            else
                                route = <Link to={item.link}>{item.text}</Link>;
                            return <li key={item.id}>{route} </li>;
                        })
                    }
                    </ul>
                </div>
            </div>    
        );
    }
}
