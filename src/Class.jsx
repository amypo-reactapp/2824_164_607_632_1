import React,{Component} from 'react'
class Class extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1});
    };
    render(){
        return(
            <div>
            <button onClick={this.handleIncrement}>increment={this.state.count}</button>
            </div>
        );
    }
}
export default Class

