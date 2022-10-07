import Image from "next/image"
import FutureImage from "next/future/image"
import cat from '../../public/img/cat.jpeg'

const NextImage = () => {
  return (
    <div>
      <h1>NextImage</h1>
      <Image src={cat} placeholder="blur"/>
      <FutureImage src={cat} placeholder="blur" alt='cat'/>
    </div>
    )
}

export default NextImage