import React from 'react'
import upgrade from '../../images/upgrade.svg'
import upgradeImg from '../../images/upgrade.png'

const UpgradeCard = () => {
    return (
        <div className="task-card p-3">
            <div className="top-section py-3">
                <div className="d-flex align-items-center mb-3">
                    <img src={upgrade} alt="upgrade icon" className='img-fluid me-3' />
                    <h5 className='mb-0'>Upgrade</h5>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-3 order-md-1 order-2">
                            <h5>Upgrade your account to become an Advertiser</h5>
                            <p className='mt-5'>As an advertiser, you will be able to:</p>
                            <ul>
                                <li>As an advertiser, you will be able to:</li>
                                <li>As an advertiser, you will be able to:</li>
                                <li>As an advertiser, you will be able to:</li>
                                <li>As an advertiser, you will be able to:</li>
                                <li>As an advertiser, you will be able to:</li>
                                <li>As an advertiser, you will be able to:</li>
                            </ul>
                            <div className="check-section">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label class="form-check-label" for="defaultCheck1">
                                        Accept <a href="#terms">Terms and Conditions</a>
                                        </label>
                                </div>
                                <button className='btn btn-primary mt-3'>upgrade</button>
                            </div>
                        </div>
                        <div className="col-md-6 text-center mb-3 order-md-2 order-1">
                            <img src={upgradeImg} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpgradeCard