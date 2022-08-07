import React, { Component } from "react";
import { Review } from "./Data";
export default class UserResponse extends Component {
  constructor() {
    super();
    this.state = { menu: [], display: "flex" };
  }

  async componentDidMount() {
    // let url = "http://localhost:8000/fetch_response_data";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // let review = [];
    // let Item_menu = {};

    // parsedData.forEach((element) => {
    //   Item_menu = {
    //     name: element.name,
    //     message: element.message,
    //   };

    //   review.push(Item_menu);
    // });

    if(Review.length===0){
        this.setState({display:'none'})
    }
    else{
        this.setState({display:'flex'})

    }

    this.setState({ menu: Review });
    // console.log(review);
  }

  render() {
    return (
      <div>
        <div className="Head-ing" style={{display:this.state.display}}  >Reviews</div>
        <div className="message-Container" style={{display:this.state.display}} >
          {this.state.menu.map((element) => {
            // element.message.length = 50;
          return  <div className="message-viewer" key={element.message}>
              <div className="m_icon">
                <img src="./image/comment_icon.png" alt="" />
              </div>
              <div className="your_message">{element.message.slice(0,125)}</div>
              <div className="your_name">{element.name}</div>
            </div>;
          })}
        </div>
      </div>
    );
  }
}
