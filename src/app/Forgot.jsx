import React from 'react';

export default class Forgot extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>忘記密碼</h1>
                    <div className="register-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="forgot-email">請輸入電子郵件</label>
                                <input type="email" className="form-control input-lg" id="forgot-email" placeholder="Email"/>
                            </div>    
                            <button type="submit" className="btn btn-default btn-lg btn-success">送出</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
