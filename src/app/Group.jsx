import React from 'react';
import Meal from './component/Meal';
import GroupModal from './component/GroupModal';
import ShortId from 'shortid';

export default class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mealName: "",
            count: "",
            time: "",
            name: "",
            tel: "",
            address: ""
        };
        this.setting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/need",
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

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        
        let form = new FormData();
        Object.keys(this.state).map((n) =>{
            form.append(n, this.state[n]);
        });

        this.setting.data = form;

        $.ajax(this.setting).done((res)=>{
            console.log(res);
        });
    }

    componentWillMount() {
        Object.keys(this.state).map((n) =>{
            let fn = `${n}Changed`;
            this[fn] = (event) => {
                let update = {};
                update[n] = event.target.value;
                this.setState(update);
            }
        });
    }

    render(){
        let formContent = [
            {id: 1, text: "品名", type: "number", labelFor: "group-meal-name", 
                placeText: "需求的物品名稱", tagName: "mealName"},
            {id: 2, text: "數量", type: "number", labelFor: "group-count", 
                placeText: "需要的餐點數量", tagName: "count"},
            {id: 3, text: "領取時間", type: "datetime-local", labelFor: "group-time", 
                placeText: "", tagName: "time"},
            {id: 4, text: "姓名", type: "text", labelFor: "group-name", 
                placeText: "姓名", tagName: "name"},
            {id: 5, text: "聯絡電話", type: "tel", labelFor: "group-tel", 
                placeText: "聯絡電話", tagName: "tel"},
            {id: 6, text: "地址", type: "text", labelFor: "group-address", 
                placeText: "地址", tagName: "address"},
        ]; 
        return (
            <div>
                <div className="container">
                    <GroupModal />
                    <Meal />
                    <Meal />
                    <Meal />
                    <Meal />
                </div>
                <div className="container">
                    <div className="col-md-12 register">
                        <h1>Hi! $name$</h1>
                        <div className="register-form">
                            <div className="form-text">
                            弱勢團體可以直接利用此表單填寫的內容，將需求的物資訊息送至資料庫。
                            </div>
                            <form onSubmit={(event) => this.handleSubmit(event)} ref="form">
                            {
                                formContent.map((item)=> {
                                    return (
                                        <div className="form-group" key={item.id}>
                                            <label htmlFor={item.labelFor}>{item.text}</label>
                                            <input type={item.type} 
                                                    className="form-control input-lg" 
                                                    id={item.labelFor} 
                                                    placeholder={item.placeText}
                                                    value={this.state[item.tagName]}
                                                    onChange={this[`${item.tagName}Changed`].bind(this)}
                                                    required/>
                                        </div>    
                                    )
                                })   
                            }
                                <button type="submit" className="btn btn-default btn-lg btn-success">送出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
