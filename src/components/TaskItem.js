import React, { Component } from 'react'

export default class TaskItem extends Component {
   onClickChange =()=>{
        this.props.changeStt(this.props.id)
   }
    render() {
        return (
          <tr>
            <td>{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td className="text-center">
              <span onClick={this.onClickChange} className={`label ${this.props.status?'label-success':'label-danger'}`}>{this.props.status?'Kích Hoạt':'Ẩn'}</span>
            </td>
            <td className="text-center">
              <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5"></span>Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5"></span>Xóa
              </button>
            </td>
          </tr>
        );
    }
}
