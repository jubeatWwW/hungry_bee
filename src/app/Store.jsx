import React from 'react';
import ShortId from 'shortid';

export default class Store extends React.Component{
    constructor(props){
        super(props);
        let date = new Date();
        let dateStr = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes()
        };

        Object.keys(dateStr).map((key) => {
            if(dateStr[key] < 10)
                dateStr[key] = `0${dateStr[key]}`
        });

        let today = `${dateStr.year}-${dateStr.month}-${dateStr.day}`;
        let curTime = `${dateStr.hour}:${dateStr.minute}`;
        this.state = {
            name: "",
            item: "---",
            price: "",
            count: "",
            start_time: `${today}T${curTime}`,
            end_time: `${today}T${this.props.location.query['end_time']}`,
            discount: "70",
            mealData: []
        };
        this.setting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/provide",
              method: "POST",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
              data: {default: "default"}
        }
        this.mealSetting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/need",
              method: "GET",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
              data: {default: "default"}
        }

      this.mealData = [];
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        
        let form = new FormData();
        Object.keys(this.state).map((n) =>{
            if(n !== "mealData")
                form.append(n, this.state[n]);
        });

        this.setting.data = form;

        $.ajax(this.setting).done((res)=>{
            console.log(res);
        });
    }

    componentWillMount() {
        Object.keys(this.state).map((n) =>{
            if(n == "mealData")
                return;
            let fn = `${n}Changed`;
            this[fn] = (event) => {
                let update = {};
                update[n] = event.target.value;
                this.setState(update);
            }
        });

        $.ajax(this.mealSetting).done((res)=> {
            this.setState({mealData: JSON.parse(res)});
        });
    }

    render(){
        let formContent = [
            {id: 1, text: "愛心餐定價", type: "number", labelFor: "store-price", 
                placeText: "一人份的價格", tagName: "price"},
            {id: 2, text: "數量", type: "number", labelFor: "store-count", placeText: "數量", tagName: "count"},
            {id: 3, text: "可領取時間", type: "datetime-local", labelFor: "store-time", placeText: "", tagName: "start_time"},
            {id: 4, text: "賞味期限", type: "datetime-local", labelFor: "store-last-time", placeText: "", tagName: "end_time"}
        ]; 
        return (
            <div className="container">
                <div className="col-md-12 register">
                    <h1>Hi! {this.props.params.name},</h1>
                    <div className="register-form">
                        <div className="form-text">
                        店家可以直接利用此表單填寫的內容，將提供的愛心便當訊息送至資料庫。
                        </div>
                        <form onSubmit={(event) => this.handleSubmit(event)} ref="form">
                            <div className="form-group">
                                <label htmlFor="store-name">品名</label>
                                <input type="text" className="form-control input-lg" 
                                id="store-name" placeholder="請輸入品名" value={this.state.name}
                                onChange={this['nameChanged'].bind(this)}
                                disabled={this.state.item==="---"?false:true}
                                required={this.state.item==="---"?true:false}/>
                            </div>    
                            <div className="form-group">
                                <label htmlFor="register-identity">點選現有菜單</label>
                                <select className="form-control input-lg" id="store-menu" onChange={this['itemChanged'].bind(this)}>
                                    <option>---</option>
                                    {
                                        this.state.mealData.map((meal)=>{
                                            return <option key={meal.id}>{meal.mealName}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="register-identity">選擇折數</label>
                                <select className="form-control input-lg" id="discount" onChange={this['discountChanged'].bind(this)}>
                                    <option value="30">30%</option>
                                    <option value="40">40%</option>
                                    <option value="50">50%</option>
                                    <option value="60">60%</option>
                                    <option value="70">70%</option>
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
        );
    }
}
