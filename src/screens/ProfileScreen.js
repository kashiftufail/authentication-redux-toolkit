import { useState } from 'react'
import '../styles/profile.css'

const ProfileScreen = () => {
  const [firstName] = useState('Ali')

  return (
    <div className='unauthorized'>
      <figure>{firstName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{firstName}!</strong> 
        you're logged in
      </span>
    </div>
  )
}

export default ProfileScreen
