import React from 'react'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
import TaskCard from '../../components/TaskCard/TaskCard'
import {BsReddit} from 'react-icons/bs'

const Reddit = () => {
  return (
    <PageWrapper>
         <div className="top-card card p-4">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className='mb-0'>Total number of tasks per day </h5>
              <h5 className='mb-0'>20</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="task-box orange-box me-3"></div>
                <h5 className='mb-0'>Total number of tasks per day </h5>
              </div>
              <h5 className='mb-0'>20</h5>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="task-box yellow-box me-3"></div>
                <h5 className='mb-0'>Total number of tasks per day </h5>
              </div>
              <h5 className='mb-0'>20</h5>
            </div>
          </div>
        </div>
      </div>
      <TaskCard icon={<BsReddit className='me-3 twitter-bird' />} title={'Reddit'}/>
    </PageWrapper>
  )
}

export default Reddit