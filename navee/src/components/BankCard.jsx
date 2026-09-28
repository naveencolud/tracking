import { CreditCard } from 'lucide-react'

export default function BankCard({ light = false }) {
  return <article className={`bank-card ${light ? 'bank-card-light' : ''}`}>
    <div className="bank-card-top"><div><span className="card-label">Balance</span><strong>$5,756</strong></div><CreditCard size={27} fill="currentColor" strokeWidth={1.5} /></div>
    <div className="bank-card-meta"><div><span className="card-label">Card Holder</span><strong>Eddy Cusuma</strong></div><div><span className="card-label">Valid Thru</span><strong>12/22</strong></div></div>
    <div className="bank-card-number"><strong>3778</strong><span>**** ****</span><strong>1234</strong><i className="card-circles" /></div>
  </article>
}