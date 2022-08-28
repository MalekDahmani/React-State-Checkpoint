import React from "react";

class TimeInterval extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            
            date: new Date().toLocaleString(),
        }
    }

    componentDidMount=()=>{
        setInterval(() => {
            this.setState(prevState=>({
                
                date: new Date().toLocaleString()
                }));
            }, 1000);
    };
    
    render() {
        return (
            <div>
            
            {this.state.date}
         </div>
        );
    }
}
export default TimeInterval