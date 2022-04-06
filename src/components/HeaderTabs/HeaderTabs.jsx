import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const HeaderTabs = ({ task, transactions, promotion, advert, setTask, setTransactions,setPromotion ,setAdvert }) => {
    

    let openTask = () => {
        document.getElementById('task').classList.add('active');
        document.getElementById('transactions').classList.remove('active');
        document.getElementById('promotions').classList.remove('active');
        console.log("task");
        setTask(true);
        setTransactions(false);
        setPromotion(false);
        setAdvert(false);
        window.location.href = '/';
    }

    let openTransactions = () => {
        document.getElementById('transactions').classList.add('active');
        document.getElementById('task').classList.remove('active');
        document.getElementById('promotions').classList.remove('active');
        console.log("transactions");
        setTask(false);
        setTransactions(true);
        setPromotion(false);
        setAdvert(false);
        window.location.href = '/transactions';
    }
    
    let openPromotion = () => {
        document.getElementById('promotions').classList.add('active');
        document.getElementById('transactions').classList.remove('active');
        document.getElementById('task').classList.remove('active');
        console.log("promotions");
        setTask(false);
        setTransactions(false);
        setPromotion(true);
        setAdvert(false);
        window.location.href = '/promotions';
    }

    let openAdvert = () => {
        
        document.getElementById('advert').classList.add('active');
        document.getElementById('promotions').classList.remove('active');
        document.getElementById('transactions').classList.remove('active');
        document.getElementById('task').classList.remove('active');
        console.log("advert");
        // setTask(false);
        // setTransactions(false);
        // setPromotion(false);
        window.location.href = '/upgrade';
        // window.addEventListener('DOMContentLoaded', () => {
        //     console.log('DOM loaded')
        //     document.getElementById('advert').classList.add('active');
        //     setAdvert(true);
        // })
        setAdvert(true);
        
        // document.getElementById('advert').classList.add('active');
    }
  return (
    <div>
        <section className='py-4 purple-section'>
                <div className="container">
                    <button className="btn btn-light me-3" id="task" onClick={openTask}>Tasks</button>
                    <button className="btn btn-light me-3" id="transactions" onClick={openTransactions}>Transactions</button>
                    <button className="btn btn-light me-3" id="promotions" onClick={openPromotion}>Promotion</button>
                    <button className="btn btn-light" id='advert' onClick={openAdvert}>Become an advertiser</button>
                </div>
            </section>
            {!advert ? <section className='bg-light white-section'>
                <div className="container">
                    {task ? <ul className='lower-link d-flex flex-wrap'>
                        <li><Link to="/" className='nav-item'>Twitter</Link></li>
                        <li><Link to="/facebook" className='nav-item'>Facebook</Link></li>
                        <li><Link to="/reddit" className='nav-item'>Reddit</Link></li>
                        <li><Link to="/youtube" className='nav-item'>Youtube</Link></li>
                        <li><Link to="/telegram" className='nav-item'>Telegram</Link></li>
                    </ul> : ""}
                    {transactions ? <ul className='lower-link d-flex flex-wrap'>
                        <li><Link to="/transactions" className='nav-item'>All</Link></li>
                        <li><Link to="#re" className='nav-item'>Received</Link></li>
                        <li><Link to="#re" className='nav-item'>Withdrawn</Link></li>
                    </ul> : ""}
                    {promotion ? <ul className='lower-link d-flex flex-wrap'>
                        <li><Link to="/promotions/setup" className='nav-item'>Set up promotions</Link></li>
                        <li><Link to="/promotions-page" className='nav-item'>Promotions Page</Link></li>
                    </ul> : ""}
                </div>
            </section>: ""}
    </div>
  )
}

export default HeaderTabs