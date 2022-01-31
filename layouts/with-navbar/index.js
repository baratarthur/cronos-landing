import { NavbarComponent } from "../../components/navbar/navbar";

import styles from './Layout.module.css'

export function NavbarLayout({ children }) {
    return (
        <div className={styles.container}>
           <NavbarComponent />
           <div className={styles.childContainer}>
                { children } 
           </div>
        </div>
    )
}
