import React from 'react'
import CustomerReview from './BloodAnalysis';
import Meeting from './Meeting';
import Notes from './Notes';
import Profile from './Profile';
import SmallBadge from './SmallBadge';
import Tempareture from "./Tempareture.js";
const Mainpage = () => {
  return (
    <div class="some-page-wrapper">
      <div class="row">
        <div class="row-column column">
          <div class="orange-column  Meeting">
            <h4 className="heading">Patient List</h4>
            <Meeting />
          </div>
        </div>
        <div class="row-column column">
          <div class="blue-column">
            <h4>Consulted</h4>
            <Profile />
          </div>
        </div>
        <div class="row-column column">
          <div class="green-column">
            <h4>Notes</h4>
            <Notes/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="green-column">
          <h4>BloodAnalysis</h4>
            <CustomerReview />
          </div>
        </div>
        <div class="column">
          <div class="orange-column"><SmallBadge/></div>
        </div>
        <div class="column">
          <div class="blue-column temparature">
            <h4 className="heading">Tempareture</h4>
            <Tempareture />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage