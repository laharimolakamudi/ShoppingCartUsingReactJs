import React from "react";
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          productname : "",
          productprice :0,
        };
      }
  render() {
    return (
      <form class="col-4" onSubmit={(e)=> {
        e.preventDefault();
          this.props.Addnewitem(this.state.productname,Number(this.state.productprice));
         
      }}>
        <div className="mb-3">
          <label htmlFor="inputname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name = "productname"
            onChange={(e) => {
                this.setState({productname : Number(e.currentTarget.value)})
            }}
            value = {this.state.productname}
          />
         
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name = "productprice"
            onChange={(e) => {
                this.setState({productprice : e.currentTarget.value})
            }}
            value = {this.state.productprice}
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary col-4" >
         Add to cart
        </button>
      </form>
    );
  }
}

export default AddItem;
