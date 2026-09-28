export default function StatCard({ icon: Icon, label, value, tone = 'blue' }) {
  return <article className="stat-card"><span className={`stat-icon ${tone}`}>{Icon && <Icon size={22} strokeWidth={2.2} />}</span><div className="stat-copy"><span>{label}</span><strong>{value}</strong></div></article>
}