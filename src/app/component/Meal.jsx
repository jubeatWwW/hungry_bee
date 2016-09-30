import React from 'react';

export default class Meal extends React.Component{
    render(){
        return (
            <div className="meal col-md-4">
                <div className="meal-info">
                    <div className="meal-info-name">店家名稱</div>
                    <div className="meal-info-product">便當品項名稱</div>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-hand-right meal-item"></span>
                    <span className="meal-provide-taken meal-item">已領取數量: 999</span>
                    <span className="meal-provide-remain meal-item">未領取數量: 999</span>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-time meal-item"></span>
                    <span className="meal-provide-taken meal-item">公開販售時間: 2016/01/01 12:00</span>
                </div>
                <div className="meal-provide">
                    <span className="glyphicon glyphicon-time meal-item"></span>
                    <span className="meal-provide-taken meal-item">最後取餐時間: 2016/01/01 12:00</span>
                </div>
                <div className="meal-provide">
                    <button type="button" className="btn btn-success btn-block btn-lg"
                        data-toggle="modal" data-target="#GroupModal">
                        領取
                    </button>
                </div>
            </div>
        );
    }
}
