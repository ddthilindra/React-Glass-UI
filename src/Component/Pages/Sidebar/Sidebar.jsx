import React from "react";
import "./Sidebar.css";
import AvaterImage from "../../../assets/prof.png";
import Link from "../Link/Link";
import { ImTwitch, ImBook } from "react-icons/im";
import { FaSteam } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import styled from "styled-components";

const Sidebar = () => {
  const defaultStyle = { fill: "url(#gradient)" };
  return (
    <div className="SidebarContainer">
      <div className="ProfileContainer">
        <Avatar src={AvaterImage} />
        <div className="Name">Deshitha Thilindra</div>
        <div className="Title">Software Engineer</div>
      </div>
      <div className="LinkContainder">
        <Link title="Strems">
          <ImTwitch style={defaultStyle} />
        </Link>
        <Link title="Games">
          <IoLogoGameControllerB style={defaultStyle} />
        </Link>
        <Link title="Upcoming">
          <FaSteam style={defaultStyle} />
        </Link>
        <Link title="Library">
          <ImBook style={defaultStyle} />
        </Link>
      </div>
    </div>
  );
};

const Avatar = styled.img`
  height: 7rem;
  border-radius: 5rem;
`;

const ProBox = styled.div`
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 15%;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto auto;
`;

const ProText = styled.span`
  color: #e7e7e7;
  font-weight: bolder;
`;

const Image = styled.img`
  height: 4rem;
  transform: rotate(-60deg);
`;

export default Sidebar;
