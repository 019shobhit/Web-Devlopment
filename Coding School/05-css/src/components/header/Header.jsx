import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Shobhit Chauhan</h3>
      <button className={styles.btn}>click here</button>
    </div>
  )
}

export default Header
