import React from 'react'
import styles from '../styles/AddButton.module.css'

function AddButton({setClose}) {
  return (
    <div onClick={()=>setClose(false)} className={styles.mainAddButton}>
      Add New Product
    </div>
  )
}

export default AddButton
