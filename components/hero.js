
import classes from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
      <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/vercel.svg" alt="image" width={300} height={300}></Image> </div>
        <div>I am Abdul</div>

        <p>
            This is my first blog
        </p>
      </section>
    )
  }