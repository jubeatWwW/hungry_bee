import React from 'react';
import {Link, IndexLink} from 'react-router';

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
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <div className="col-md-12">
                                        <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="login-email">電子郵件</label>
                                                <input type="email" className="form-control" id="login-email" placeholder="請輸入電子郵件" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="exampleInputPassword2">密碼</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="請輸入密碼" required/>
                                                <div className="help-block">
                                                    <a href="register.htm">尚未成為會員</a> 
                                                    <a href="forgot.htm">忘記密碼?</a>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">登入</button>
                                            </div>
                                            <div className="checkbox">
                                                <label><input type="checkbox"/>保持登入 </label>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>    
        );
    }
}
