import { PureComponent } from "react";

class PureCompo extends PureComponent{
    constructor(){
        super();
        this.state = {
            number : 5

        }
    }


    render(){
        return(
            <>
            <h4>Display multiplied Number : {this.state.number}</h4>
            <button onClick={()=>{this.setState({number: this.state.number* 5})}}>Change the Number</button>
            
            </>
        )

    }
}

export default PureCompo;