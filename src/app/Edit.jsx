import React from 'react';

export default class Edit extends React.Component{
    render(){
        let formContent = [
            {id: 1, text: "電子郵件", type: "email", labelFor: "register-email", placeText: "Email"},
            {id: 2, text: "密碼", type: "password", labelFor: "register-passwd", placeText: "Password"},
            {id: 3, text: "再次輸入密碼", type: "password", labelFor: "register-passwd-chk", placeText: "Password"},
            {id: 4, text: "店家名稱 / 弱勢團體", type: "text", labelFor: "register-store-name", placeText: "店家名稱 / 弱勢團體"},
            {id: 5, text: "地址", type: "text", labelFor: "register-address", placeText: "地址"},
            {id: 6, text: "連絡電話", type: "text", labelFor: "register-tel", placeText: "連絡電話"},
            {id: 7, text: "營業時間", type: "tel", labelFor: "register-open-time", placeText: "營業時間 例 : 09:00-20:00"}
        ]; 
        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>編輯基本資料</h1>
                    <div className="register-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="register-identity">身分別</label>
                                <select className="form-control input-lg" disabled="true" id="register-identity">
                                    <option>店家</option>
                                    <option>弱勢團體</option>
                                </select>
                            </div>
                        {
                            formContent.map((item)=> {
                                return (
                                    <div className="form-group" key={item.id}>
                                        <label htmlFor={item.labelFor}>{item.text}</label>
                                        <input type={item.type} className="form-control input-lg" disabled={item.id==1?true:false} id={item.labelFor} placeholder={item.placeText}/>
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
