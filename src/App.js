import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  state = {
    data: [],
    active:true
  };
  onAddData = (name,status) => {
    const newItem = {
      id: Date.now(),
      name: name,
      status: status
    };
    // console.log(newItem.status);
    const newData = [...this.state.data, newItem];
    this.setState({ data: newData });
  };
  changeSttHandler=(id)=>{
    const {data} = this.state
    const indexOfData=data.findIndex(item=>{
      return item.id === id;
    })
    data[indexOfData].status = !data[indexOfData].status;

    this.setState({data: data})
  }
  onDisplay  = () =>{
    this.setState({
    active: true
  })
  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Môn Học</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */}
            <TaskForm onAddData={this.onAddData} />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span onClick={this.onDisplay} className="fa fa-plus mr-5"></span>Thêm Môn Học
            </button>
            {/* Search & Sort */}
            <Control />
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList changeStt={this.changeSttHandler} data={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
