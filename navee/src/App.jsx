import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'
import Accounts from './pages/Accounts.jsx'
import Investments from './pages/Investments.jsx'
import CreditCards from './pages/CreditCards.jsx'
import Loans from './pages/Loans.jsx'
import Services from './pages/Services.jsx'
import Settings from './pages/Settings.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(() => localStorage.getItem('bankdash-profile-photo') || '/images/profile.png')
  const pages = { Dashboard, Transactions, Accounts, Investments, 'Credit Cards': CreditCards, Loans, Services, Setting: Settings }
  const Page = pages[activePage]

  function updateProfilePhoto(photo) {
    try {
      localStorage.setItem('bankdash-profile-photo', photo)
      setProfilePhoto(photo)
      return true
    } catch {
      return false
    }
  }

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={(page) => { setActivePage(page); setMenuOpen(false) }} isOpen={menuOpen} />
      <div className="workspace">
        <Header title={activePage} onMenu={() => setMenuOpen((open) => !open)} profilePhoto={profilePhoto} />
        <main className="page-content" key={activePage}><Page onNavigate={setActivePage} profilePhoto={profilePhoto} onProfilePhotoChange={updateProfilePhoto} /></main>
      </div>
    </div>
  )
}

export default App
