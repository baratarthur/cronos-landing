import Link from "next/link";

import styles from './Navbar.module.css';

export function NavbarComponent() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/"><a>Cronos</a></Link>
            </div>
            <div className={styles.links}>
                <Link href="/services">Serviços</Link>
                <Link href="/posts">Blog</Link>
                <Link href="/about">Quem somos</Link>
            </div>
        </nav>
    )
}