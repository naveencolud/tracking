import { BriefcaseBusiness, CreditCard, ShieldCheck, ShoppingBag, WalletCards, ChartNoAxesCombined } from 'lucide-react'

const services = [
  { name: 'Business loans', detail: 'It is a long established', icon: BriefcaseBusiness, tone: 'pink' }, { name: 'Checking accounts', detail: 'It is a long established', icon: WalletCards, tone: 'amber' },
  { name: 'Savings accounts', detail: 'It is a long established', icon: ChartNoAxesCombined, tone: 'pink' }, { name: 'Debit and credit cards', detail: 'It is a long established', icon: CreditCard, tone: 'blue' },
  { name: 'Life Insurance', detail: 'It is a long established', icon: ShieldCheck, tone: 'mint' }, { name: 'Business loans', detail: 'It is a long established', icon: BriefcaseBusiness, tone: 'pink' },
]

export default function Services() {
  return <div className="services-page"><div className="service-feature-grid"><article className="panel service-feature"><span className="stat-icon blue"><ShieldCheck size={22} /></span><div><strong>Life Insurance</strong><small>Unlimited protection</small></div></article><article className="panel service-feature"><span className="stat-icon amber"><ShoppingBag size={22} /></span><div><strong>Shopping</strong><small>Buy. Think. Grow.</small></div></article><article className="panel service-feature"><span className="stat-icon mint"><ShieldCheck size={22} /></span><div><strong>Safety</strong><small>We are your allies</small></div></article></div>
    <section><div className="section-heading"><h2>Bank Services List</h2></div><div className="service-list">{services.map(({ name, detail, icon: Icon, tone }, index) => <article className="panel service-row" key={`${name}-${index}`}><span className={`stat-icon ${tone}`}><Icon size={21} /></span><div className="service-name"><strong>{name}</strong><small>{detail}</small></div><div><strong>{index === 0 ? 'Flexible terms' : 'Lorem ipsum'}</strong><small>Many publishing</small></div><div><strong>{index === 1 ? 'Everyday access' : 'Lorem ipsum'}</strong><small>Many publishing</small></div><div><strong>{index === 2 ? 'Competitive rates' : 'Lorem ipsum'}</strong><small>Many publishing</small></div><button className="outline-button" onClick={() => window.alert(`${name}: service details coming soon`)}>View Details</button></article>)}</div></section>
  </div>
}