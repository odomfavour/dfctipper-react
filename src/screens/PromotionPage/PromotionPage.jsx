import React from 'react'
import PromotionTable from '../../components/PromotionTable/PromotionTable'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'

const PromotionPage = () => {
    return (
        <PageWrapper>
            <div className="task-card p-3">
                <div className="top-section py-3">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className='mb-0'>Promotion Page</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Status</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Promotion Type</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-group row">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Date Created</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PromotionTable />
            </div>
        </PageWrapper>
    )
}

export default PromotionPage