import React from 'react';
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transactionlist from './components/TransactionList';
import Addtransaction from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (<>
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactionlist />
        <Addtransaction />
      </div>
    </GlobalProvider>
  </>
  );
}
export default App;