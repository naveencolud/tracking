import { ChartNoAxesCombined, CreditCard, HandCoins, House, Settings, Wrench, UserRound, ArrowLeftRight } from 'lucide-react'

const navigation = [
  { label: 'Dashboard', icon: House }, { label: 'Transactions', icon: ArrowLeftRight },
  { label: 'Accounts', icon: UserRound }, { label: 'Investments', icon: ChartNoAxesCombined },
  { label: 'Credit Cards', icon: CreditCard }, { label: 'Loans', icon: HandCoins },
  { label: 'Services', icon: Wrench }, { label: 'Setting', icon: Settings },
]

export default function Sidebar({ activePage, onNavigate, isOpen }) {
  return <>
    {isOpen && <button className="sidebar-scrim" aria-label="Close menu" onClick={() => onNavigate(activePage)} />}
    <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
      <button className="brand" onClick={() => onNavigate('Dashboard')} aria-label="BankDash home"><span className="brand-mark"><CreditCard size={24} strokeWidth={2.2} /></span><span>BankDash<span className="brand-dot">.</span></span></button>
      <nav className="side-nav" aria-label="Main navigation">{navigation.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${activePage === label ? 'active' : ''}`} onClick={() => onNavigate(label)}><Icon size={19} strokeWidth={2.2} /><span>{label}</span></button>)}</nav>
      <div className="sidebar-foot"><span className="status-dot" /> All systems operational</div>
    </aside>
  </>
}