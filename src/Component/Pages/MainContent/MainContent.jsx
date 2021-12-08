import React, { Component } from "react";
import "./MainContent.css";
import styled from "styled-components";
//import { FiSearch } from "react-icons/fi";
import Game from "./Game";
import Assassin from "../../../assets/assassins.jpg";
import Spiderman from "../../../assets/spiderman.jpg";
import Batman from "../../../assets/batman.jpg";



class Maincontent extends Component {
  render() {
    return (
      <div className="MainContentContainer">
        <h1 style={{marginTop:"-40px"}}>Active Games</h1>
        <InputContainer>
          <Input type="text" placeholder="search" />
          {/* <FiSearch /> */}
        </InputContainer>
        <div className="GamesContainer">
        <Game
          image={Assassin}
          title="Assassins Creed Valhalla"
          platform="PS5 Version"
          percent="50"
        />
        <Game
          image={Spiderman}
          title="Spiderman - Miles Morales"
          platform="PS5 Version"
          percent="74"
        />
        <Game
          image={Batman}
          title="Batman Arkham Knight"
          platform="PS5 Version"
          percent="90"
        />
        </div>
      </div>
    );
  }
}

const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 10rem;
    top: 1.5rem;
  }
`;

const Input = styled.input`
  border-radius: 2rem;
  border: none;
  width: 15rem;
  padding: 0.6rem 1rem;
  margin: 1rem 0 0 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 0.9rem;
  color: #bd063d;
  &::placeholder {
    color: #3b5f92;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export default Maincontent;
