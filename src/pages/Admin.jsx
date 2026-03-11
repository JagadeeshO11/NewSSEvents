import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, Save, Image as ImageIcon, Layout, Star, ArrowLeft } from 'lucide-react'
import { useData } from '../context/DataContext'
import { Link } from 'react-router-dom'
import './Admin.css'

export default function Admin() {
  const { siteData, addItem, deleteItem, updateData } = useData()
  const [activeTab, setActiveTab] = useState('gallery')
  const [newItem, setNewItem] = useState({ title: '', cat: 'weddings', src: '' })

  const handleAddPhoto = (e) => {
    e.preventDefault()
    if (!newItem.title || !newItem.src) return
    addItem('photos', newItem)
    setNewItem({ title: '', cat: 'weddings', src: '' })
  }

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <Link to="/" className="back-link"><ArrowLeft size={20} /> Site</Link>
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>
            <ImageIcon size={20} /> Gallery
          </button>
          <button className={activeTab === 'services' ? 'active' : ''} onClick={() => setActiveTab('services')}>
            <Layout size={20} /> Services
          </button>
          <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>
            <Star size={20} /> Stats
          </button>
        </nav>
      </div>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <p>Update your website content in real-time.</p>
        </header>

        <div className="admin-content">
          {activeTab === 'gallery' && (
            <div className="admin-section">
              <form className="admin-form card" onSubmit={handleAddPhoto}>
                <h3>Add New Image</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Image Title</label>
                    <input type="text" value={newItem.title} onChange={e => setNewItem({...newItem, title: e.target.value})} placeholder="e.g. Royal Wedding" required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select value={newItem.cat} onChange={e => setNewItem({...newItem, cat: e.target.value})}>
                      <option value="weddings">Weddings</option>
                      <option value="birthdays">Birthdays</option>
                      <option value="corporate">Corporate</option>
                      <option value="cultural">Cultural</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label>Image URL (or path from /public)</label>
                    <input type="text" value={newItem.src} onChange={e => setNewItem({...newItem, src: e.target.value})} placeholder="/hero.png" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary"><Plus size={18} /> Add to Gallery</button>
              </form>

              <div className="admin-gallery-grid">
                {siteData.photos.map(photo => (
                  <div key={photo.id} className="admin-item-card">
                    <img src={photo.src} alt={photo.title} />
                    <div className="admin-item-info">
                      <span className="badge">{photo.cat}</span>
                      <h4>{photo.title}</h4>
                      <button className="btn-delete" onClick={() => deleteItem('photos', photo.id)}><Trash2 size={16} /></button>
                    </div>
                  </div>
                )).reverse()}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
             <div className="admin-section">
               <p className="note">Service management coming soon. Currently editable via initialData.js</p>
               <div className="admin-item-list">
                 {siteData.services.map(svc => (
                   <div key={svc.id} className="admin-list-item card">
                     <img src={svc.img} alt={svc.title} style={{width: '60px', height: '60px', borderRadius: '8px'}} />
                     <div className="list-content">
                       <h4>{svc.title}</h4>
                       <p>{svc.desc.substring(0, 60)}...</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {activeTab === 'stats' && (
            <div className="admin-section">
              <div className="stats-edit-grid">
                {siteData.stats.map((s, idx) => (
                  <div key={s.id} className="card stat-edit-card">
                    <label>{s.label}</label>
                    <input 
                      type="text" 
                      value={s.value} 
                      onChange={e => {
                        const newStats = [...siteData.stats]
                        newStats[idx].value = e.target.value
                        updateData({...siteData, stats: newStats})
                      }} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
