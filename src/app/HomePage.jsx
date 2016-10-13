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
                <div className="container">
                </div>
                <div className="container-field">
                    <hr/>
                </div>
                <div className="container">
                    {
                        this.state.mealData.map((item) => {
                            return (
                                <HomeMeal storeName={item.userName}
                                    mealName={item.name}
                                    taken={item.count-item.remain}
                                    remain={item.remain}
                                    startTime={item['start_time']}
                                    lastTime={item['last_time']}
                                    id={item.id}
                                    key={item.id}/>
                            );
                        })
                    }
                </div>
                <div className="container-field">
                    <hr/>
                </div>
                <div className="container">
                    <div className="col-md-12 register">
                    </div>
                </div>
            </div>
        );
    }
}
