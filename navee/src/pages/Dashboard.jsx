import { useState } from 'react'
import { ArrowRight, Send } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from 'recharts'
import BankCard from '../components/BankCard.jsx'
import Transaction from '../components/Transaction.jsx'
import { people, transactions } from '../data/data.js'

const weekly = [
  { day: 'Sat', deposit: 245, withdraw: 475 }, { day: 'Sun', deposit: 120, withdraw: 340 }, { day: 'Mon', deposit: 260, withdraw: 320 },
  { day: 'Tue', deposit: 380, withdraw: 475 }, { day: 'Wed', deposit: 240, withdraw: 150 }, { day: 'Thu', deposit: 240, withdraw: 390 }, { day: 'Fri', deposit: 335, withdraw: 395 },
]
const balance = [{ month: 'Jul', value: 120 }, { month: 'Aug', value: 340 }, { month: 'Sep', value: 250 }, { month: 'Oct', value: 480 }, { month: 'Nov', value: 430 }, { month: 'Dec', value: 780 }, { month: 'Jan', value: 610 }]

function SectionHeading({ children, action }) { return <div className="section-heading"><h2>{children}</h2>{action}</div> }

export default function Dashboard({ onNavigate }) {
  const [selectedPerson, setSelectedPerson] = useState(0)
  const [amount, setAmount] = useState('')
  const [transferSent, setTransferSent] = useState(false)
  return <div className="dashboard-grid">
    <section className="grid-section cards-section"><SectionHeading>My Cards <button className="text-button" onClick={() => onNavigate('Credit Cards')}>See All</button></SectionHeading><div className="bank-card-grid"><BankCard /><BankCard light /></div></section>
    <section className="grid-section recent-section"><SectionHeading>Recent Transaction</SectionHeading><div className="panel recent-list">{transactions.slice(0, 3).map((item) => <Transaction key={item.name} item={item} />)}</div></section>
    <section className="grid-section activity-section"><SectionHeading>Weekly Activity</SectionHeading><div className="panel chart-panel"><div className="chart-legend"><span><i className="legend-dot deposit" />Deposit</span><span><i className="legend-dot withdraw" />Withdraw</span></div><ResponsiveContainer width="100%" height="100%"><BarChart data={weekly} margin={{ top: 26, right: 10, left: 0, bottom: 0 }} barGap={7}><CartesianGrid vertical={false} stroke="#edf1f7" /><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#7189b7', fontSize: 11 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#7189b7', fontSize: 10 }} domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} width={32} /><Tooltip cursor={{ fill: '#f5f7fb' }} /><Bar dataKey="withdraw" fill="#2919e8" radius={[6, 6, 6, 6]} maxBarSize={11} /><Bar dataKey="deposit" fill="#22c9bc" radius={[6, 6, 6, 6]} maxBarSize={11} /></BarChart></ResponsiveContainer></div></section>
    <section className="grid-section expense-section"><SectionHeading>Expense Statistics</SectionHeading><div className="panel expense-panel"><div className="expense-donut"><div className="donut-label label-entertainment"><b>30%</b><small>Entertainment</small></div><div className="donut-label label-bill"><b>15%</b><small>Bill Expense</small></div><div className="donut-label label-investment"><b>20%</b><small>Investment</small></div><div className="donut-label label-other"><b>35%</b><small>Others</small></div></div></div></section>
    <section className="grid-section transfer-section"><SectionHeading>Quick Transfer</SectionHeading><div className="panel transfer-panel"><div className="people-row">{people.slice(0, 3).map((person, index) => <button className={`person ${selectedPerson === index ? 'selected-person' : ''}`} key={person.name} onClick={() => setSelectedPerson(index)}><img src={person.image} alt="" /><strong>{person.name}</strong><small>{person.role}</small></button>)}<button className="circle-arrow" aria-label="More contacts" onClick={() => setSelectedPerson((selectedPerson + 1) % people.length)}><ArrowRight size={18} /></button></div><form className="transfer-form" onSubmit={(event) => { event.preventDefault(); setTransferSent(true) }}><label>Write Amount<input type="number" value={amount} onChange={(event) => { setAmount(event.target.value); setTransferSent(false) }} placeholder="525.50" min="1" step="0.01" required /></label><button type="submit">{transferSent ? 'Sent' : 'Send'} <Send size={15} /></button></form>{transferSent && <span className="transfer-success">Transfer sent to {people[selectedPerson].name}</span>}</div></section>
    <section className="grid-section balance-section"><SectionHeading>Balance History</SectionHeading><div className="panel chart-panel balance-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={balance} margin={{ top: 18, right: 8, left: 0, bottom: 0 }}><defs><linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3346f5" stopOpacity={0.2} /><stop offset="100%" stopColor="#3346f5" stopOpacity={0.01} /></linearGradient></defs><CartesianGrid stroke="#edf1f7" strokeDasharray="3 3" /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#7189b7', fontSize: 10 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#7189b7', fontSize: 10 }} width={28} /><Tooltip /><Area dataKey="value" type="monotone" stroke="#3024ed" strokeWidth={2} fill="url(#balanceFill)" /></AreaChart></ResponsiveContainer></div></section>
  </div>
}