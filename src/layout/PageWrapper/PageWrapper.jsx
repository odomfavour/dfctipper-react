import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import HeaderTabs from '../../components/HeaderTabs/HeaderTabs'

const PageWrapper = ({children}) => {
  let [task, setTask] = useState(true);
    let [transactions, setTransactions] = useState(false);
    let [promotion, setPromotion] = useState(false);
    let [advert, setAdvert] = useState(false);

    useEffect(() => {
      setAdvert(JSON.parse(window.localStorage.getItem('advert')));
      setPromotion(JSON.parse(window.localStorage.getItem('promotion')));
      setTask(JSON.parse(window.localStorage.getItem('task')));
      setTransactions(JSON.parse(window.localStorage.getItem('transactions')));
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('advert', advert);
      window.localStorage.setItem('promotion', promotion);
      window.localStorage.setItem('task', task);
      window.localStorage.setItem('transactions', transactions);
    }, [advert, promotion, task, transactions]);
   
  return (
    <section className='main-container'>
        <div className="headers">
            {/* <Header openAdvert openPromotion openTask openTransactions /> */}
            <Header />
            <HeaderTabs task={task} transactions={transactions} promotion={promotion} advert={advert} setTask={setTask} setTransactions={setTransactions} setPromotion={setPromotion} setAdvert={setAdvert} />
        </div>
        <div className='page-container'>
          <div className="container">
            {children}
          </div>
        </div>
    </section>
  )
}

export default PageWrapper