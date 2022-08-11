import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featured.module.css'

const Featured = () => {
    const images=[
    {
        name:"/pizz3.png",
        logo:"its good"
    },
    {
      name:"/pizz2.png",
      logo:"its good"
  },
  {
    name:"/pizz1.png",
    logo:"its good"
  }
    ]
    const [index,setIndex]=useState(0);
    const HandleArrow=(direction)=>{
      if(direction==="l"){
        setIndex(index!==0 ? index-1 : 2)
      }
      if(direction==="r"){
        setIndex(index!==2 ?  index+1 :0)
      }

    }
    console.log(index);
  return (
    <div className={styles.container}>
      
      <div className={styles.arrowContainer} style={{left:0}} onClick={()=>HandleArrow("l")}>

        <Image src="/arrowl2.jpg" alt="" layout='fill' />
      </div>
    <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
    {/* <Image src="/pizza1.jpg"  alt="" layout='fill'   /> */}
    {images.map((img,i)=>{
      const names=`${img.name}`;
      return(
      
    <div className={styles.imgContainer} key={i} >
     <Image src={names}   alt="" layout='fill' objectFit='contain' />
     
    </div>
      )})}
    </div>
   
    <div className={styles.arrowContainer} style={{right:0}}>
      <Image src="/arrowr.png" alt="" layout='fill'  onClick={()=>HandleArrow("r")}/>
    </div>


    </div>
  )
}

export default Featured
