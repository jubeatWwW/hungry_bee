import React from 'react';
import ShortId from 'shortid';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            item: "",
            price: "",
            count: "",
            time: "",
            last_time: ""
        };
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
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
            {id: 1, text: "愛心餐定價", type: "number", labelFor: "store-price", placeText: "一人份的價格", tagName: "price"},
            {id: 2, text: "數量", type: "number", labelFor: "store-count", placeText: "數量", tagName: "count"},
            {id: 3, text: "領取時間", type: "datetime-local", labelFor: "store-time", placeText: "", tagName: "time"},
            {id: 4, text: "最後販售時間", type: "datetime-local", labelFor: "store-last-time", placeText: "", tagName: "last_time"}
        ]; 
        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>Hi! $name$</h1>
                    <div className="register-form">
                        <div className="form-text">
                        店家可以直接利用此表單填寫的內容，將提供的愛心便當訊息送至資料庫。
                        </div>
                        <form onSubmit={(event) => this.handleSubmit(event)} ref="form">
                            <div className="form-group">
                                <label htmlFor="store-name">品名</label>
                                <input type="text" className="form-control input-lg" 
                                id="store-name" placeholder="請輸入品名" value={this.state.name}
                                onChange={this['nameChanged'].bind(this)}/>
                            </div>    
                            <div className="form-group">
                                <label htmlFor="register-identity">點選現有菜單</label>
                                <select className="form-control input-lg" id="store-menu" onChange={this['itemChanged'].bind(this)}>
                                    <option>---</option>
                                    <option>item1</option>
                                    <option>item2</option>
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
