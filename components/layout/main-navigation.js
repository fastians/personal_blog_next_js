import Logo from './logo';
import Link from 'next/link';
import classes from './main-navigation.module.css'
import { Fragment } from 'react';
export default function MainNavigation() {
    return (
        <Fragment>
        <header className={classes.header}>
            <Link href="/"><a>
                <Logo/>
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                    <Link href="/post">Post</Link>
                
                    </li>
                    <li>
                    <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header> 
      </Fragment>
    )
  }