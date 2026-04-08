import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
                <h1 className={styles.name}>{nomeUsuario}</h1>
            </div>
        </header>
    )
}

export default Perfil;