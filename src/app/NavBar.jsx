import React from 'react';
import {Link, IndexLink} from 'react-router';
import ShortId from 'shortid';
import LoginForm from './component/LoginForm'


class LoginBtn extends React.Component{
    render(){
        return (
            <li className="dropdown nav-li">
                <a className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <b>會員登入</b>
                    <span className="caret"></span>
                </a>
                <LoginForm />
            </li>
        );
    }
}

export default class NavBar extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            isLogin: false
        }
        this.setting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/loginChk",
              method: "GET",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
        }
        this.settingLogout = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/logout",
              method: "POST",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
        }

    }

    componentWillMount(){
        $.ajax(this.setting).done( (res) => {
            let data = JSON.parse(res);
            if(data.isLogin){
                this.setState(data);
            }
        });
    
    }

    handleLogout(event){
        console.log("logout");
        $.ajax(this.settingLogout).done((res) => {
            console.log(res);
            window.location.assign('/');
        });

    }

    render(){
        let items = [{text: '首頁', dropdown: false, link: '/', home: true},
                    {text: '進度頁面', dropdown: false, link: '/', home: false}];
        
        if(this.state.isLogin){
            items.push({text: '編輯基本資料', dropdown: false, link: '/edit', home: false});
            if(this.state.identity === "group"){
                items.push({text: '弱勢團體', dropdown: false, link: '/group', home: false});  
            } else {
                items.push({text: '店家', dropdown: false, link: '/store', home: false});
            }
        }

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
                    {this.state.isLogin ? <li className="nav-li" onClick={this.handleLogout.bind(this)}><a>登出</a></li>: <LoginBtn /> }
                    </ul>
                </div>
            </div>    
        );
    }
}
