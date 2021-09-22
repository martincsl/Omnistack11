import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import heroesImg from  '../../assets/heroes.png';
import './styles.css';

export default function Logon(){

    const [id, setId]=useState();
    const history=useHistory();

    async function handleLogon (e) {
      e.preventDefault();
      try {
          alert(id);
          const data={id};
          const dataStr=id;
          const dataTest = {id: '18a418c6'};
          console.log(data);
          console.log(dataStr);
          console.log(dataTest);
          alert (JSON.stringify(data));
        const response = await api.post('sessions', dataTest);
        console.log(response.data.name);

        localStorage.setItem('ongId',id);
        localStorage.setItem('ongName',response.data.name);

        history.push('/profile')

      } catch {
          alert('Falha no Login. nao existe ONG cadastrada com essa Id')
      }

    }
    return (
        <div className="logon-container">
        <section className="form">
           
            <img src={logoImg} alt="be the Hero" />
            <form onSubmit={handleLogon} >
                <h1>Faça seu Logon</h1>
                <input placeholder="Sua Id" value ={id} onChange={ (e) => setId(e.target.value)}/> 
                <button className="button-std" type="submit">Entrar</button>
                <Link to="/register">
                   <FiLogIn size={16} color="#E02041" />
                   Não tenho cadastro 
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>
    )
}