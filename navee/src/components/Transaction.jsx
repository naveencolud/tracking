import { ArrowDownLeft, ArrowUpRight, Music2, Smartphone, UserRound, ArrowLeftRight } from 'lucide-react'

const icons = { music: Music2, phone: Smartphone, person: UserRound, transfer: ArrowLeftRight }

export default function Transaction({ item, detailed = false }) {
  const Icon = icons[item.icon] || ArrowLeftRight
  return <div className={`transaction-row ${detailed ? 'detailed' : ''}`}>
    <span className={`transaction-icon ${item.amount > 0 ? 'positive' : ''}`}>{detailed ? (item.amount > 0 ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />) : <Icon size={18} />}</span>
    <span className="transaction-name"><strong>{item.name}</strong>{!detailed && <small>25 Jan 2021</small>}</span>
    {detailed && <><span>{item.id}</span><span>{item.type}</span><span>{item.card}</span><span>{item.date}</span></>}
    <strong className={`transaction-amount ${item.amount > 0 ? 'income' : 'expense'}`}>{item.amount > 0 ? '+' : '-'}${Math.abs(item.amount).toLocaleString()}</strong>
    {detailed && <button className="outline-button download-button">Download</button>}
  </div>
}