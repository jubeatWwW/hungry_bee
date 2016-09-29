import React from 'react';

export default class Register extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            identity: "store",
            email: "",
            passwd: "",
            passwd2: "",
            name: "",
            address: "",
            tel: "",
            time: ""
        };
        
        this.setting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/register",
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

    handelSubmit(event){
        event.preventDefault();
        console.log(this.state);
        if(this.state.passwd !== this.state.passwd2){
            console.log("Password not match");
        } else{
            let form = new FormData();
            Object.keys(this.state).map((n) =>{
                if(n !== "passwd2")
                    form.append(n, this.state[n]);
            });

            this.setting.data = form;

            $.ajax(this.setting).done((res)=>{
                console.log(res);
            });

        }

    }

    componentWillMount(){
        Object.keys(this.state).map((n)=>{
            let fn = `${n}Changed`;
            this[fn] = (event) =>{
                let update = {};
                update[n] = event.target.value;
                this.setState(update);
            } 
        });
    }

    render(){
        let formContent = [
            {id: 1, text: "電子郵件", type: "email", labelFor: "register-email", 
                placeText: "Email", tagName: "email", required: true},
            {id: 2, text: "密碼", type: "password", labelFor: "register-passwd", 
                placeText: "Password", tagName: "passwd", required: true},
            {id: 3, text: "再次輸入密碼", type: "password", labelFor: "register-passwd-chk", 
                placeText: "Password", tagName: "passwd2", required: true},
            {id: 4, text: "店家名稱 / 弱勢團體", type: "text", labelFor: "register-store-name", 
                placeText: "店家名稱 / 弱勢團體", tagName: "name", required: true},
            {id: 5, text: "地址", type: "text", labelFor: "register-address", 
                placeText: "地址", tagName: "address", required: true},
            {id: 6, text: "連絡電話", type: "tel", labelFor: "register-tel", 
                placeText: "連絡電話", tagName: "tel", required: true},
            {id: 7, text: "營業時間", type: "text", labelFor: "register-open-time", 
                placeText: "營業時間 例 : 09:00-20:00", tagName:"time", required: false}
        ]; 
        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>註冊會員</h1>
                    <div className="register-form">
                        <div className="form-text">目前捐贈及領取機構皆為實名登記制，若您願意提供愛心便當或者您有此便當需求，請直接連絡本公司：03-6230127 公司將有專人與您洽談。
                        </div>
                        <form onSubmit={(event) => this.handelSubmit(event)}>
                            <div className="form-group">
                                <label htmlFor="register-identity">身分別</label>
                                <select className="form-control input-lg" 
                                        id="register-identity"
                                        onChange={this["identityChanged"].bind(this)}>
                                    <option value="store">店家</option>
                                    <option value="group">弱勢團體</option>
                                </select>
                            </div>
                        {
                            formContent.map((item)=> {
                                return (
                                    <div className="form-group" key={item.id}>
                                        <label htmlFor={item.labelFor}>{item.text}</label>
                                        <input type={item.type} 
                                            className="form-control input-lg" 
                                            id={item.labelFor} 
                                            placeholder={item.placeText}
                                            required={item.required}
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
