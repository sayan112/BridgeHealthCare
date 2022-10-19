import React from "react";
import { FileEarmarkMedical } from "react-bootstrap-icons";
import { FileMedical } from "react-bootstrap-icons";
import { JournalMedical } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import Mainpage from "./Mainpage";
import NavbarUp from "./Navbar";
const Dashboard = () => {
  return (
    <div className="nav_mainpage">
      <header class="header" id="header">
        <NavbarUp />
      </header>
      <div class="l-navbar" id="nav-bar">
        <nav class="nav">
          <div className="logo&navicons">
            <a href="#" class="nav_logo">
              <span class="nav_logo-name">
                <FileEarmarkMedical size={90} />
              </span>
            </a>
            <div class="nav_list">
              <a href="#" class="nav_link active">
                <span class="nav_name">
                  <FileMedical />
                </span>
              </a>
              <a href="#" class="nav_link">
                <span class="nav_name">
                  <JournalMedical />
                </span>
              </a>
              <a href="#" class="nav_link">
                <span class="nav_name">
                  <Heart />
                </span>
              </a>
            </div>
          </div>
          {/* <a href="#" class="nav_link">
            <span class="nav_name">SignOut</span>
          </a> */}
        </nav>
      </div>
      <div class="bg-green maincontent">
        <Mainpage />
      </div>
    </div>
  );
};

export default Dashboard;
