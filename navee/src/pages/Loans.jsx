import { BriefcaseBusiness, HandCoins, UserRound, Wrench } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import { loanRows } from '../data/data.js'

export default function Loans() {
  return <div className="loans-page"><div className="stat-grid four"><StatCard icon={UserRound} label="Personal Loans" value="$50,000" tone="blue" /><StatCard icon={BriefcaseBusiness} label="Corporate Loans" value="$100,000" tone="amber" /><StatCard icon={HandCoins} label="Business Loans" value="$500,000" tone="pink" /><StatCard icon={Wrench} label="Custom Loans" value="Choose Money" tone="mint" /></div>
    <section className="loan-section"><div className="section-heading"><h2>Active Loans Overview</h2></div><div className="panel table-panel loan-table"><div className="loan-table-head"><span>SL No</span><span>Loan Money</span><span>Left to repay</span><span>Duration</span><span>Interest rate</span><span>Installment</span><span>Repay</span></div>{loanRows.map((row, index) => <div className="loan-row" key={`${row[0]}-${index}`}><span>{String(index + 1).padStart(2, '0')}.</span>{row.map((cell, cellIndex) => <span key={cellIndex}>{cell}</span>)}<button className="outline-button" onClick={() => window.alert(`Repayment for loan ${String(index + 1).padStart(2, '0')} started`)}>Repay</button></div>)}<div className="loan-total"><span>Total</span><span>$125,000</span><span>$750,000</span><span /><span /><span>$50,000 / month</span><span /></div></div></section>
  </div>
}