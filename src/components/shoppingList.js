import React from "react";
class ShoppingList extends React.Component{

    
        render() {
            const Grocery = [
                { itemName: 'Food', price: 25000 },
                { itemName: 'Sauce', price: 35000 },
                { itemName: 'Juice', price: 20000 }
            ];
    
            return (
                <div className="ShoppingList">
                    <h1>Shopping List for {this.props.name}</h1>
                    <ul>
                        {Grocery.map((grocery, index) => (
                            <li key={index}>
                                {grocery.itemName}: {grocery.price}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
    
    export default ShoppingList;
