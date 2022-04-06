import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'

const PromotionSetup = () => {
    return (
        <PageWrapper>
            <div className="task-card p-3">
                <div className="top-section py-3">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className='mb-0'>All Transactions</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
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
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Promotion Type</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="form-group row">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Date Created</label>
                                <div class="col-sm-10">
                                    <input type="date" class="form-control" id="inputEmail3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 px-4">
                    <div className="mt-3">
                        <div class="form-group">
                            <label for="amount">Enter the amount you want to spend on this promotion</label>
                            <input type="text" class="form-control" id="amount" aria-describedby="amount" placeholder='DFC' />
                        </div>
                    </div>
                    <div className="mt-3">
                        <div class="form-group">
                            <label for="peopleNumber">How many people do you want to pay</label>
                            <input type="text" class="form-control" id="peopleNumber" aria-describedby="peopleNumber" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <div class="form-group">
                            <label for="promotionLink">Paste Promotion Link or create promotion</label>
                            <input type="text" class="form-control" id="promotionLink" aria-describedby="promotionLink" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary">Proceed</button>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default PromotionSetup