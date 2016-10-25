import React from 'react';
import {Link} from 'react-router';

export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            passwd: ""
        }
        this.setting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/login",
              method: "POST",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
              data: {default: "default"}
        }
    }

    componentWillMount(){
        Object.keys(this.state).map((key) => {
            let fn = `${key}Changed`;
            this[fn] = (event) => {
                let update = {};
                update[key] = event.target.value;
                this.setState(update);
            } 
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        let form = new FormData();
        form.append('email', this.state.email);
        form.append('passwd', this.state.passwd);
        this.setting.data = form;

        $.ajax(this.setting).done((res) => {
            console.log(res);
            window.location.assign('/HungryBee/');
        });
    }

    render(){
        return(
            <ul className="dropdown-menu dropdown-menu-right">
                <li>
                    <div className="col-md-12">
                        <form className="form" role="form" acceptCharset="UTF-8" id="login-nav" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="login-email">電子郵件</label>
                                <input type="email" className="form-control" id="login-email" 
                                placeholder="請輸入電子郵件" onChange={this['emailChanged'].bind(this)}
                                value={this.state.email}  required/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="passwd">密碼</label>
                                <input type="password" className="form-control" id="passwd" 
                                placeholder="請輸入密碼" onChange={this['passwdChanged'].bind(this)} 
                                value={this.state.passwd} required/>
                                <div className="help-block">
                                    <Link to="/register">尚未成為會員</Link> 
                                    <Link to="/forgot">忘記密碼?</Link>
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
