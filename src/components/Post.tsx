import styles from './Post.module.css'

type Props = {author: string, content:string}

export function Post(props: Props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/carlosmsv.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Carlos Matheus</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="21 de Janeiro às 14:20h" dateTime="2024-01-21 14:20:00" className={styles.date}>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Hey y'all 👋</p>

                <p>I just posted another project on GitHub.</p>

                <p>👉 <a href="">github.com/carlosmsv</a></p>

                <p>
                    <a href="">#newproject</a>
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}
  