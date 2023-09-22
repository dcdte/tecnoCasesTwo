import React from 'react'
import Map from '../components/Map/index'
import styled from 'styled-components';

const Mapa = () => {

/*   async function getStores() {
    let shops =  await axios.get('https://stormy-chamber-42652.herokuapp.com/tienda')
    return shops.data
  }

  async function saveData() {
    Departament.stores = await getStores();
  }

  saveData() */

  return (
    <div>
      <Logo>
        <img src={require("../assets/Sisas.png")}></img>
      </Logo>
      <Map/>
    </div>
  )
}

export default Mapa

const Logo = styled.div`
  width: 100px; 
  position: absolute; 
  top: 30px; 
  left: 350px; 

  img {
    width: 250px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`