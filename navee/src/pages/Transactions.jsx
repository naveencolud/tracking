import { useState } from 'react'
import { ArrowDownToLine, Plus } from 'lucide-react'
import BankCard from '../components/BankCard.jsx'
import Transaction from '../components/Transaction.jsx'
import { transactions } from '../data/data.js'

export default function TransactionsPage() {
  const [filter, setFilter] = useState('All Transactions')
  const filtered = transactions.filter((item) => filter === 'All Transactions' || (filter === 'Income' ? item.amount > 0 : item.amount < 0))
  return <div className="transactions-page">
    <div className="transaction-top-grid"><section><div className="section-heading"><h2>My Cards</h2><button className="text-button"><Plus size={15} /> Add Card</button></div><div className="bank-card-grid"><BankCard /><BankCard light /></div></section><section><div className="section-heading"><h2>My Expense</h2></div><div className="panel expense-bars">{[42, 78, 48, 22, 90, 42].map((height, index) => <div key={index} className="expense-bar-column"><b>{index === 4 ? '$12,500' : ''}</b><i className={index === 4 ? 'highlight' : ''} style={{ height: `${height}%` }} /><small>{['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'][index]}</small></div>)}</div></section></div>
    <div className="section-heading transactions-heading"><h2>Recent Transactions</h2></div><div className="tabs filter-tabs" role="tablist">{['All Transactions', 'Income', 'Expense'].map((tab) => <button role="tab" aria-selected={filter === tab} className={filter === tab ? 'active' : ''} key={tab} onClick={() => setFilter(tab)}>{tab}</button>)}</div>
    <div className="panel table-panel"><div className="table-scroll"><div className="table-head"><span>Description</span><span>Transaction ID</span><span>Type</span><span>Card</span><span>Date</span><span>Amount</span><span>Receipt</span></div>{filtered.map((item) => <Transaction key={item.name} item={item} detailed />)}</div></div>
    <div className="pagination"><button>‹ Previous</button>{[1, 2, 3, 4].map((n) => <button key={n} className={n === 1 ? 'current' : ''}>{n}</button>)}<button>Next ›</button></div><button className="floating-download" aria-label="Download transactions"><ArrowDownToLine size={18} /></button>
  </div>
}