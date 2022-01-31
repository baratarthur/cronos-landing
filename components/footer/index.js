import styles from './footer.module.css';

export function FooterComponent() {
    return (
        <div className={styles.footerContainer}>
            <p>Contato: agencia@email.com</p>
            <p>Desde 2022</p>
            <p>@Copyright</p>
        </div>
    )
}
