import { useRef, useState } from 'react'
import { Camera, ShieldCheck } from 'lucide-react'

const initialProfile = { name: 'Charlene Reed', username: 'Charlene Reed', email: 'charlenereed@gmail.com', password: 'password123', birth: '25 January 1990', address: 'San Jose, California, USA', permanent: 'San Jose, California, USA', city: 'San Jose', postal: '4592', country: 'USA' }

export default function Settings({ profilePhoto, onProfilePhotoChange }) {
  const [tab, setTab] = useState('Edit Profile')
  const [profile, setProfile] = useState(initialProfile)
  const [saved, setSaved] = useState(false)
  const [enabled, setEnabled] = useState([true, false, true, true])
  const [photoMessage, setPhotoMessage] = useState('')
  const photoInput = useRef(null)
  function update(key, value) { setProfile((current) => ({ ...current, [key]: value })); setSaved(false) }
  function save(event) { event.preventDefault(); setSaved(true) }
  function selectPhoto(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setPhotoMessage('Choose an image file.')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setPhotoMessage('Choose an image smaller than 2 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      const savedPhoto = typeof reader.result === 'string' && onProfilePhotoChange(reader.result)
      setPhotoMessage(savedPhoto ? 'Profile photo updated.' : 'Could not save this image in browser storage.')
    }
    reader.onerror = () => setPhotoMessage('Could not read this image.')
    reader.readAsDataURL(file)
  }
  return <section className="panel settings-panel"><div className="tabs settings-tabs" role="tablist">{['Edit Profile', 'Preferences', 'Security'].map((item) => <button role="tab" aria-selected={tab === item} className={tab === item ? 'active' : ''} key={item} onClick={() => setTab(item)}>{item}</button>)}</div>
    {tab === 'Edit Profile' && <form className="settings-form profile-form" onSubmit={save}><div className="avatar-edit"><img src={profilePhoto} onError={(event) => { event.currentTarget.src = 'https://i.pravatar.cc/160?img=47' }} alt="Charlene Reed" /><button aria-label="Change profile photo" title="Change profile photo" type="button" onClick={() => photoInput.current?.click()}><Camera size={15} /></button><input ref={photoInput} className="visually-hidden" type="file" accept="image/*" onChange={selectPhoto} /><span className="photo-feedback" role="status">{photoMessage}</span></div><div className="profile-fields">{[['name', 'Your Name'], ['username', 'User Name'], ['email', 'Email'], ['password', 'Password'], ['birth', 'Date of Birth'], ['address', 'Present Address'], ['permanent', 'Permanent Address'], ['city', 'City'], ['postal', 'Postal Code'], ['country', 'Country']].map(([key, label]) => <label key={key}>{label}<input type={key === 'password' ? 'password' : key === 'email' ? 'email' : 'text'} value={profile[key]} onChange={(event) => update(key, event.target.value)} /></label>)}</div><div className="settings-submit"><button className="primary-button" type="submit">Save</button>{saved && <span className="form-message">Profile saved</span>}</div></form>}
    {tab === 'Preferences' && <form className="settings-form preferences-form" onSubmit={save}><div className="preferences-fields"><label>Currency<select defaultValue="USD"><option>USD</option><option>EUR</option><option>GBP</option><option>INR</option></select></label><label>Time Zone<select defaultValue="(GMT-12:00) International Date Line West"><option>(GMT-12:00) International Date Line West</option><option>(GMT-08:00) Pacific Time</option><option>(GMT+00:00) UTC</option><option>(GMT+05:30) India Standard Time</option></select></label></div><h3>Notification</h3><div className="toggle-list">{['I send or receive digital currency', 'I receive merchant order', 'There are recommendation for my account'].map((label, index) => <label className="toggle-row" key={label}><input type="checkbox" checked={enabled[index]} onChange={() => setEnabled((current) => current.map((value, item) => item === index ? !value : value))} /><span className="toggle-track" /><span>{label}</span></label>)}</div><div className="settings-submit"><button className="primary-button" type="submit">Save</button>{saved && <span className="form-message">Preferences saved</span>}</div></form>}
    {tab === 'Security' && <form className="settings-form security-form" onSubmit={save}><h3>Two-factor Authentication</h3><label className="toggle-row security-toggle"><input type="checkbox" checked={enabled[3]} onChange={() => setEnabled((current) => current.map((value, index) => index === 3 ? !value : value))} /><span className="toggle-track" /><span>Enable or disable two factor authentication</span></label><h3>Change Password</h3><label className="password-field">Current Password<input type="password" placeholder="********" /></label><label className="password-field">New Password<input type="password" placeholder="********" /></label><div className="settings-submit"><button className="primary-button" type="submit">Save</button>{saved && <span className="form-message">Security settings saved</span>}</div><span className="security-mark"><ShieldCheck size={20} /></span></form>}
  </section>
}