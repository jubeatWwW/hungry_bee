import React from 'react';
import ShortId from 'shortid';

export default class Edit extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            identity: "group",
            email: "",
            passwd: "",
            passwd2: "",
            name: "",
            address: "",
            tel: "",
            time: ""
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
        this.settingEdit = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/Edit",
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
        Object.keys(this.state).map((key) => {
            let fn = `${key}Changed`;
            this[fn] = (event) => {
                let update = {};
                update[key] = event.target.value;
                this.setState(update);
            }
        });
        

        $.ajax(this.setting).done( (res) => {
            let data = JSON.parse(res);
            if(data.isLogin){
                delete data.isLogin;
                this.setState(data);
                console.log(this.state);
            }
        });

    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        let form = new FormData();
        Object.keys(this.state).map((key) => {
            if(key !== "passwd2")
                form.append(key, this.state[key]);
        });  
        this.settingEdit.data = form;

        $.ajax(this.settingEdit).done((res) => {
            console.log(res);
        });
    }

    render(){
        /*{id: 2, text: "輸入舊密碼", type: "password", labelFor: "registe-oldr-passwd", 
            placeText: "Old Password", tagName: "oldpasswd"},*/
        let formContent = [
            {id: 1, text: "電子郵件", type: "email", labelFor: "register-email", 
                placeText: "Email", tagName: "email"},
            {id: 2, text: "輸入新密碼", type: "password", labelFor: "register-passwd", 
               placeText: "Password", tagName: "passwd"},
            {id: 3, text: "再次輸入密碼", type: "password", labelFor: "register-passwd-chk", 
                placeText: "Password", tagName: "passwd2" },
            {id: 4, text: "店家名稱 / 弱勢團體", type: "text", labelFor: "register-store-name", 
                placeText: "店家名稱 / 弱勢團體", tagName: "name"},
            {id: 5, text: "地址", type: "text", labelFor: "register-address", 
                placeText: "地址", tagName: "address"},
            {id: 6, text: "連絡電話", type: "text", labelFor: "register-tel", 
                placeText: "連絡電話", tagName: "tel"},
            {id: 7, text: "營業時間", type: "text", labelFor: "register-open-time", 
                placeText: "營業時間 例 : 09:00-20:00", tagName: "time"}
        ]; 


        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>編輯基本資料</h1>
                    <div className="register-form">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="register-identity">身分別</label>
                                <select className="form-control input-lg" disabled="true" 
                                    id="register-identity" onChange={this['identityChanged'].bind(this)}>
                                    <option>{this.state.identity=="store"?"店家":"弱勢團體"}</option>
                                </select>
                            </div>
                        {
                            formContent.map((item)=> {
                                return (
                                    <div className="form-group" key={item.id}>
                                        <label htmlFor={item.labelFor}>{item.text}</label>
                                        <input type={item.type} 
                                            className="form-control input-lg" 
                                            disabled={item.tagName=="email"?true:false} 
                                            id={item.labelFor} 
                                            placeholder={item.placeText}
                                            value={this.state[item.tagName]}
                                            onChange={this[`${item.tagName}Changed`].bind(this)}/>
                                    </div>    
                                )
                            })   
                        }
                            <button type="submit" className="btn btn-default btn-lg btn-success">送出</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
