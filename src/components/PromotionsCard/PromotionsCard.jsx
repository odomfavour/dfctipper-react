import React from 'react'
import file from '../../images/file.png'

const PromotionsCard = () => {
    return (
        <div className="task-card p-3">
            <div className="top-section py-3">
                <div className="d-flex align-items-center justify-content-between flex-md-row flex-column">
                    <div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Filter</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Reset</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="table-section ">
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 70 + 'vh' }}>
                        <div className='text-center'>
                            <img src={file} alt="" className='img-fluid' />
                            <h4 className='mt-4'>No online Promotion yet</h4>
                            <button className="btn btn-primary mt-3">Create Promotion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionsCard