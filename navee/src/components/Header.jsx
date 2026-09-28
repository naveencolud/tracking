import { Bell, Menu, Search, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Header({ title, onMenu, profilePhoto }) {
  const [noticeOpen, setNoticeOpen] = useState(false)
  return <header className="topbar">
    <button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button>
    <h1>{title}</h1>
    <div className="topbar-actions">
      <label className="search-box"><Search size={17} /><input aria-label="Search" placeholder="Search for something" /></label>
      <button className="icon-button" aria-label="Settings" title="Settings"><Settings size={19} /></button>
      <div className="notice-wrap"><button className="icon-button notice-button" aria-label="Notifications" onClick={() => setNoticeOpen((open) => !open)}><Bell size={19} /><i /></button>{noticeOpen && <div className="notice-popover"><strong>You’re all caught up</strong><span>No new notifications</span></div>}</div>
      <button className="profile-button" aria-label="Your profile"><img src={profilePhoto} onError={(event) => { event.currentTarget.src = 'https://i.pravatar.cc/96?img=47' }} alt="Profile" /></button>
    </div>
  </header>
}