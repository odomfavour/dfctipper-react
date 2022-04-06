import React from 'react'
import { Table } from 'react-bootstrap'

const TaskCard = ({ icon, title }) => {
  return (
    <div className="task-card p-3">
      <div className="top-section py-3">
        <div className="d-flex align-items-center mb-3">
          {icon}
          <h5 className='mb-0'>{title} tasks</h5>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-md-row flex-column">
          <div className="d-flex flex-column">
            <h5>Show</h5>
            <div className='mx-3'>
              <select class="custom-select">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <h5>entries</h5>
          </div>
          <div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="table-section">
          <Table responsive bordered className='text-white'>
            <thead>
              <tr>
                <th scope="col">Lists of tasks</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>http://t.me/dfctippingbot?start=538268078</td>
                <td><button className='btn btn-done'>Done</button></td>
              </tr>
              <tr>
                <td>http://t.me/dfctippingbot?start=538268078</td>
                <td><button className='btn btn-done'>Done</button></td>
              </tr>
              <tr>
                <td>http://t.me/dfctippingbot?start=538268078</td>
                <td><button className='btn btn-undone'>Undone</button></td>
              </tr>
            </tbody>
          </Table>
          <nav aria-label="...">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <span class="page-link">2</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TaskCard