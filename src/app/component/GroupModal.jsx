import React from 'react';


export default class GroupModal extends React.Component{
    constructor(props){
        super(props);
        this.formContent = [
            {id: 1, text: "數量", type: "number", labelFor: "recipient-count", 
                tagName: "count"},
            {id: 2, text: "領取人姓名", type: "text", labelFor: "recipient-name", 
                tagName: "name"},
            {id: 3, text: "領取人電話", type: "tel", labelFor: "recipient-tel", 
                tagName: "tel" },
            {id: 4, text: "領取人地址", type: "text", labelFor: "recipient-address",
                tagName: "address"}
        ];

        this.state= {
            count: "",
            name: "",
            tel: "",
            address: ""
        }
        
    }

    componentWillMount(){
        this.formContent.map((item) => {
            let fn = `${item.tagName}Changed`;
            this[fn] = (event) => {
                let update = {};
                update[item.tagName] = event.target.value;
                this.setState(update);
            }
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="modal fade" id="GroupModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3 className="modal-title text-center font-bold padding-top-bottom-md" id="myModalLabel">愛心便當領取</h3>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="modal-body">
                                
                            {   
                                this.formContent.map((item) => {
                                    return (
                                        <div className="form-group" key={item.id}>
                                            <label className="form-control-label" htmlFor={item.labelFor}>{item.text}</label>
                                            <input type={item.type}
                                                className="form-control input-lg"
                                                value={this.state[item.tagName]}
                                                onChange={this[`${item.tagName}Changed`].bind(this)}
                                                required/>
                                        </div>
                                    );
                                })
                            }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary input-lg" data-dismiss="modal">關閉</button>
                                <button type="submit" 
                                    className="btn btn-success input-lg" >
                                        送出
                                </button>
                            </div>
                        </form>
                    </div>
                 </div>
            </div>
        );
    }
}
