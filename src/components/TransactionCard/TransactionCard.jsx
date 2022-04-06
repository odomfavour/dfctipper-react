import React from 'react'
import file from '../../images/file.png'
import { Table } from 'react-bootstrap'

const TransactionCard = () => {
    return (
        <div className="task-card p-3">
            <div className="top-section py-3">
                <div className="d-flex align-items-center mb-3">
                    <h5 className='mb-0'>All Transactions</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-md-row flex-column">
                    <div className="d-flex flex-wrap">
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
                                <th scope="col">Reference Number</th>
                                <th scope="col">Transaction Detail</th>
                                <th scope="col">Channel</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>T245612345678</td>
                                <td>200000DFC from aystores@gmail.com</td>
                                <td>Crypto</td>
                                <td>Monday 24th January 2022 7:40pm</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 70 + 'vh' }}>
                        <img src={file} alt="" className='img-fluid' />
                    </div>
                    <nav aria-label="...">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#f">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <span class="page-link">2</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="#f">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#f">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard