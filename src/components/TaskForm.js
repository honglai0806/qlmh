import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
      name: "",
      status: false,
      isHide: false,
  };
  onAdd = (event) => {
    event.preventDefault();
    this.props.onAddData(this.state.name,this.state.status)
    this.setState({
      name: this.state.name, status: this.state.status
    })
  };
  onChageHandle =(event)=>{
    this.setState({ name: event.target.value });
  }
  onChageHandle2 =()=>{
    this.setState({ status: !this.state.status });
  }
  onCloseHandler = () =>{
    this.setState({isHide: !this.state.isHide})
  }
  render() {
    return (
      <div style={{display: this.state.isHide ?"none": null}} className="panel panel-warning">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          className="panel-heading"
        >
          <h3 className="panel-title">Thêm Môn Học</h3>
          <i onClick={this.onCloseHandler} className="far fa-times-circle"></i>
        </div>
        <div  className="panel-body">
          <form onSubmit={this.onAdd}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                value={this.state.name}
                onChange={this.onChageHandle}
                type="text"
                className="form-control"
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              value={this.state.status}
              onChange={this.onChageHandle2}
              className="form-control"
              required="required"
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Thêm
              </button>
              &nbsp;
              <button type="submit" className="btn btn-danger">
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
