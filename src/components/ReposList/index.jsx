import { useState, useEffect } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(false);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) throw new Error("Usuário inválido"); // 👈 ACRESCENTE
                return res.json(); // 👈 ACRESCENTE
            })
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                    setErro(false); // 👈 ACRESCENTE
                }, 2000);
            })
            .catch(() => { // 👈 ACRESCENTE
                setTimeout(() => { // 👈 ACRESCENTE
                    setEstaCarregando(false); // 👈 ACRESCENTE
                    setErro(true); // 👈 ACRESCENTE
                }, 2000); // 👈 ACRESCENTE
            }); // 👈 ACRESCENTE
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? ( // 👈 ACRESCENTE
                <h1>Você digitou um usuário inválido, tente novamente.</h1> // 👈 ACRESCENTE
            ) : (
                <ul className={styles.list}>
                    {repos.map(respositorio => (
                        <li className={styles.listItem} key={respositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome</b>{respositorio.name}<br />
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem</b>{respositorio.language}<br />
                            </div>
                            <a className={styles.itemLink} target="_blank" href={respositorio.html_url}>
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;