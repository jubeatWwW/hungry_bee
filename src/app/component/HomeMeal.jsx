import React from 'react';

class SalesTags extends React.Component {
    render(){
        return (
            <div>
                <div className="cover-img-label-blue">販售中</div>
                <div className="cover-img-label-orange">{this.props.discount}%</div>
            </div>
        );
    }
}

export default class HomeMeal extends React.Component{

    handleClick(){
        this.props.onClick(this.props.id, this.props.remain);
    }

    render(){
        return (
            <div className="meal col-md-4">
                <div className="meal-img">
                    <a className="img-responsive">
                        <div className="meal-img-block"><img src="src/images/default-img.jpg" /></div>
                    </a>
                    {Date.parse(new Date()) > Date.parse(this.props.endTime)? 
                        <SalesTags discount={this.props.discount}/>:false}
                </div>
                <div className="meal-info">
                    <div className="meal-info-name">{this.props.storeName}</div>
                    <div className="meal-info-product">{this.props.mealName}</div>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-hand-right meal-item"></span>
                    <span className="meal-item">已領取數量: {this.props.taken}</span>
                    <span className="meal-item">未領取數量: {this.props.remain}</span>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-time meal-item"></span>
                    <span className="meal-item">公開販售時間: {this.props.startTime}</span>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-time meal-item"></span>
                    <span className="meal-item">最後取餐時間: {this.props.endTime}</span>
                </div>
            </div>
        );
    }
}
