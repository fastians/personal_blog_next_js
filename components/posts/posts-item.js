import classes from "./posts-item.module.css";
import Link from "next/link";

export default function PostsItem(props) {

    const {title, image, excerpt,date, slug} = props.post;
    return (
      <li className={classes.post}>
          <Link>
          <a>
            <div className={classes.image}><Image /></div>
            <div className={classes.content}>
             <h3>Title</h3>
             <time> July 13 2020</time>
             <p>The Expert</p>
            </div>
        </a></Link>
      </li>
    );
  } 