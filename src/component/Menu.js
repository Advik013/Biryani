import React, { Component } from "react";
import "./style/Menu.css";
import { NewArray } from "./Data";
export class Menu extends Component {
  constructor() {
    super();
    this.state = { menu: [], displaypror: "" };
  }

  async componentDidMount() {
    // let url = "http://localhost:8000/menu_data";
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // let NewArray = [];
    // let Item_menu= {};
 

    // parsedData.forEach((element) => {
    //   Item_menu =
    //     {
    //       name: element.name,
    //       qty_1: element.qty_1,
    //       qty_1_price: element.qty_1_price,
    //       qty_2: element.qty_2,
    //       qty_2_price: element.qty_2_price,
    //       qty_3: element.qty_3,
    //       qty_3_price: element.qty_3_price,
    //       img:element.img
    //     }
      

      // NewArray.push(Item_menu)
    
    // });
 

 
    this.setState({ menu: NewArray});
    // console.log(NewArray);
  }


  render() {
    return (
      <>
        <div id="food_container" className="mp-container" >
          {this.state.menu.map(element => {
            return (
              <div className="card" key={element.name}>
                <img src={element.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <li>{element.name}</li>
                  <table className="GeneratedTable">
                    <tbody>
                      <tr>
                        <td>{element.qty_1}</td>
                        <td>{element.qty_1_price}</td>
                      </tr>
                      <tr>
                        <td>{element.qty_2}</td>
                        <td>{element.qty_2_price}</td>
                      </tr>
                      <tr style={{ display: this.state.displaypror }}>
                        <td>{element.qty_3}</td>
                        <td>{element.qty_3_price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Menu;
