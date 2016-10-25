import React from 'react';
import HomeMeal from './component/HomeMeal';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mealName: "",
            count: "",
            time: "",
            name: "",
            tel: "",
            address: "",
            mealData: [],
            mealId: "",
            remain: ""
        };
        this.mealSetting = {
              async: true,
              crossDomain: true,
              url: "https://jubeatdb.nctucs.net/meal",
              method: "GET",
              xhrFields: {
                withCredentials: true
              },
              processData: false,
              contentType: false,
              mimeType: "multipart/form-data",
              data: {default: "default"}
        }
    }

    componentWillMount() {

        this.mealSetting.url = "https://jubeatdb.nctucs.net/meal";
        $.ajax(this.mealSetting).done((res)=> {
            this.setState({mealData: JSON.parse(res)});
        });
    }

    render(){
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="text-center col-md-12">
                            <h1>關於我們</h1>
                            <div className="about-us-info">
                                <p>HungryBee app 的誕生，是由兩位長期在新竹科學園區工作的工程師所發想。竹科園區及周邊無法讓商店進駐，每到中午用餐時間，即使擁有員工餐廳的公司仍無法消化這龐大的午餐需求，造成許多園區夥伴們的困擾。因此兩位竹科工程師催生了 HungryBee app 的誕生，並提供新竹美食外送的服務，希望利用最方便，省時的方式解決這些問題，重點是還要兼顧美味！ </p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="home-meal">
                    <div className="container">
                        {
                            this.state.mealData.map((item) => {
                                return (
                                    <HomeMeal storeName={item.userName}
                                        mealName={item.name}
                                        taken={item.count-item.remain}
                                        remain={item.remain}
                                        startTime={item['start_time']}
                                        endTime={item['end_time']}
                                        id={item.id}
                                        discount={item.discount}
                                        key={item.id}/>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-12 register">
                    </div>
                </div>
                <div className="container">
                    <div className="col-md-12 register">
                    </div>
                </div>
            </div>
        );
    }
}
