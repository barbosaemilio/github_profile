import {useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciaou');

        return () => {
            console.log('O componente finalizou');
        }
    },[]);

    useEffect(() => {
        console.log('O componente nome foi atualizado');
    },[nome]);

    useEffect(()=>{
        console.log('O componente matéria A foi atualizado'+ materiaA);
    },[materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        });
    }

    const renderizaResultado =() => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;



        if (media >= 7) {
            return (
                <p>Olá {nome}, você está aprovado</p>
            )
        } else {
            return <p>Olá {nome}, você está reprovado</p>
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>))} 
            </ul>
            <input type="text" placeholder="Nome do aluno" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(Number(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(Number(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;