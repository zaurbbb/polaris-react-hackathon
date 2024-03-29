import React from "react";
import "../../../Styles/DropdownList.sass";

class SelectBox extends React.Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0]
    };

    dropDown = () => {
        this.setState((prevState) => ({
            showItems: !prevState.showItems
        }));
    };

    selectItem = (item) => {
        this.setState({
            selectedItem: item,
            showItems: false
        });
    };

    render() {
        return (
            <div className="select-box--box">
                <div className="select-box--container">
                    <div className="select-box--line">
                        <div className="select-box---selected-item">
                            {this.state.selectedItem.id === 0 ?
                                " "
                                :
                                <img src={this.state.selectedItem.img}/>
                                }

                                            {this.state.selectedItem.value}


                        </div>
                        <div className="select-box---arrow" onClick={this.dropDown}>
                            <img src="https://cdn-icons-png.flaticon.com/512/54/54785.png" alt=""/>

                        {/*<span*/}
                        {/*    className={`${*/}
                        {/*        this.state.showItems*/}
                        {/*            ? "select-box--arrow-up"*/}
                        {/*            : "select-box--arrow-down"*/}
                        {/*    }`}*/}
                        {/*/>*/}
                        </div>
                    </div>


                    <div
                        style={{ display: this.state.showItems ? "block" : "none" }}
                        className={"select-box--items"}
                    >
                        {this.state.items.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                className={this.state.selectedItem === item ? "selected" : ""}
                            >
                                {item.value === "Select a blockchain" ?
                                         " "
                                    :
                                        <img src={item.img} alt=""/>
                                }
                                {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectBox;
