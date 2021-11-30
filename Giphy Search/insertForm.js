import React from "react";


class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            imgSrc:"",
            alt:""
        }
    
    }

    handleChange() {
        fetch("api.giphy.com/9uwCyvybjD8ZmZb9bmqgSDVFjxLcWgVD/gifs/search")
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                imgSrc: response.data.url,
                alt: response.data.username
              });
            },
           
          )
      }


 



    render(){
        return(
            <div>
                Input keyword:
         <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
         />
           <div>
               Search Result
               <img src={this.imgSrc} alt={this.alt}/>
                </div>
            </div>
         
        )
    }
}

export default Form;