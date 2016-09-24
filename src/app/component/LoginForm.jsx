import React from 'react';
import {Link} from 'react-router';

export default class LoginForm extends React.Component{
    render(){
        return(
            <ul className="dropdown-menu dropdown-menu-right">
                <li>
                    <div className="col-md-12">
                        <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="login-email">電子郵件</label>
                                <input type="email" className="form-control" id="login-email" placeholder="請輸入電子郵件" required/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="passwd">密碼</label>
                                <input type="password" className="form-control" id="passwd" placeholder="請輸入密碼" required/>
                                <div className="help-block">
                                    <Link to="/register">尚未成為會員</Link> 
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
        );
    }
}
