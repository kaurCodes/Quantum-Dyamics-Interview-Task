import React, { useState } from "react";
import {
  BankShaded,
  Chat,
  Company,
  Gear,
  Lock,
  Logout,
  Message,
  ModeSwapper,
  Search,
  SmallLogo,
  TriangleDown,
  Users,
} from "../../svg";
import { Button } from "../Button/Button";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
const profileDropDownOptions = [
  {
    title: "See My Company",
    icon: Company,
  },
  {
    title: "Live Chat",
    icon: Chat,
  },
  {
    title: "Support",
    icon: Message,
  },
  {
    title: "Change Password",
    icon: Lock,
  },
  {
    title: "Settings",
    icon: Gear,
  },
];



export const Header = () => {
    const modeMenuRef = React.useRef(null)
    const profileMenuRef = React.useRef(null)
  const [modeSwapperOpen, setModeSwapperOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

 

  return (
    <div className="header">
      <div className="header_logo_container">
        <p className="header_title">Logo</p>
        <div
          className="header_mode-swapper"
          onClick={() => {
            setModeSwapperOpen(!modeSwapperOpen);
          }}
        >
          <ModeSwapper />
          <CSSTransition
          nodeRef={modeMenuRef}
            in={modeSwapperOpen}
            timeout={500}
            classNames="mode-menu-transition"
            unmountOnExit
            appear
          >
            <div ref={modeMenuRef} className="header_mode-menu" id="mode-menu">
              <div className="header_mode-menu-option">
                <BankShaded />
                <p className="nunito-normal-sonic-silver-16px">
                  Switch Banking
                </p>
              </div>
              <div className="header_mode-menu-option">
                <Users />
                <p className="nunito-normal-sonic-silver-16px">
                  Switch HR/Payroll
                </p>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="header__search-box border-1px-snuff ">
          <Search />
          <input
            className="nunito-normal-sonic-silver-16px"
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
        </div>
      </div>

      <div
        className="header_profile-details"
        onClick={() => {
          setProfileDropdownOpen(!profileDropdownOpen);
        }}
      >
        <div className="header_small-logo">
          <SmallLogo />
        </div>
        <p className="header_dropdown_text nunito-semi-bold-butterfly-bush-20px ">
          Quantum Dyanamics
        </p>
        <TriangleDown />

        <CSSTransition
          nodeRef={profileMenuRef}
            in={profileDropdownOpen}
            timeout={500}
            classNames="profile-menu-transition"
            unmountOnExit
            appear
          >
            <div ref={profileMenuRef} className="profile_dropdown">
      <div className="profile_dropdown-card">
        <div className="profile_dropdown-card-details">
          <SmallLogo />
          <div className="profile_dropdown-card-detail">
            <p className="nunito-normal-heavy-metal-16px ">Quantum Dyanmics</p>
            <p className="nunito-normal-sonic-silver-16px">Shivom Agarwal</p>
          </div>
        </div>

        <div className="profile_dropdown-buttons">
          <Button type="secondary" title="Export My Data" />
          <a
            href=""
            className="profile_dropdown-link nunito-normal-purple-mountains-majesty-18px"
          >
            Logout <Logout />{" "}
          </a>
        </div>
      </div>

      {profileDropDownOptions.map((option, index) => {
        return (
          <div className="profile_dropdown-option-container" key={index}>
            <div className="profile_dropdown-divider"></div>

            <div className="profile_dropdown-option">
              <option.icon />
              <p className="nunito-normal-purple-mountains-majesty-18px">
                {option.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
          </CSSTransition>
      </div>
    </div>
  );
};
