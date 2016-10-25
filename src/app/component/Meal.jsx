import React from 'react';

export default class Meal extends React.Component{

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
                    <span className="meal-item">最後取餐時間: {this.props.lastTime}</span>
                </div>
                <div className="meal-provide">
                    <button type="button" className="btn btn-success btn-block btn-lg"
                        data-toggle="modal" data-target="#GroupModal" onClick={this.handleClick.bind(this)}>
                        領取
                    </button>
                </div>
            </div>
        );
    }
}
