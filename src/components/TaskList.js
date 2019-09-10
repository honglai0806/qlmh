import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
    changeStatus = id =>{
        this.props.changeStt(id)
    }
    render() {
        return (
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Ðộng</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td></td>
                <td>
                  <input type="text" class="form-control" />
                </td>
                <td>
                  <select className="form-control">
                    <option value="-1">Tất Cả</option>
                    <option value="0">Ẩn</option>
                    <option value="1">Kích Hoat</option>
                  </select>
                </td>
              </tr> */}
              {this.props.data.map((item,index)=>{
                  return (
                    <TaskItem
                      changeStt = {this.changeStatus}
                      stt={index + 1}
                      name={item.name}
                      status={item.status}
                      key={item.id}
                      id={item.id}
                    />
                  ); 
              })}
              
            </tbody>
          </table>
        );
    }
}
