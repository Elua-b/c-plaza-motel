import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured = () => {
    const images=[
    {
        name:"/foodog.png",
        logo:"its good"
    },
    {
      name:"/food2.jpg",
      logo:"its good"
  },
  {
    name:"/food3.jpg",
    logo:"its good"
  }
    ]
  return (
    <div className={styles.container}>
      
      <div className={styles.arrowContainer} style={{left:0}}>

        <Image src="/arrowr.png" alt="" layout='fill'  />
      </div>
    <div className={styles.wrapper}>
    {/* <Image src="/pizza1.jpg"  alt="" layout='fill'   /> */}
    {images.map((img,i)=>{
      const names=`${img.name}`;
      return(
      
    <div className={styles.imgContainer} key={i}>
     <Image src={names}   alt="" layout='fill' objectFit='contain'  />
     
    </div>
      )})}
    </div>
   
    <div className={styles.arrowContainer} style={{right:0}}>
      <Image src="/arrowl2.jpg" alt="" layout='fill'  />
    </div>


    </div>
  )
}

export default Featured
