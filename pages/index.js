import { title, text, btn } from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div>
      <h1 className = {title}>This is a Homepage</h1>
      <p className = {text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium et dolorem sed voluptatem nulla nam, reiciendis enim distinctio aliquid consequuntur animi in illo iure doloremque non voluptate. Adipisci pariatur odio incidunt earum odit, delectus recusandae doloremque eveniet iure. Optio delectus harum eaque, sint et ut dicta rerum laudantium, inventore eius facere. A iure itaque quis accusantium aliquam enim delectus rerum in velit. Pariatur, magnam blanditiis soluta sit repudiandae recusandae hic officia vero earum harum voluptatem. Accusantium, id quod voluptas beatae earum incidunt quasi sapiente, soluta pariatur eos praesentium. Molestiae inventore dolorem error eum iusto odit est aliquam, aperiam minus quis.</p>
      <button className={btn}>Explore more</button>
        <Image src="/img/code.png" width={300} height={300} alt="code is my passion" />
      </div>
    
    </>
  )
}
