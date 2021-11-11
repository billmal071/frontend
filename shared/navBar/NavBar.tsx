import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

interface NavProps {
  showNavBar: boolean;
  setShowNavBar: (showNavBar: boolean) => void;
}

const NavBar = ({ showNavBar, setShowNavBar }: NavProps) => {
  const menu = [
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Sell On Kwek",
      url: "/",
    },
    {
      title: "Registry",
      url: "/registry",
    },
    {
      title: "Gift Cards",
      url: "/gift-cards",
    },
    {
      title: "Customer Service",
      url: "/customer-service",
    },
    {
      title: "Reviews",
      url: "/reviews",
    },
    {
      title: "Vendors",
      url: "/vendors",
    },
  ];
  return (
    <nav
      id={styles.mainNav}
      className="bg-primary"
      style={{ transform: showNavBar && "translateX(0)" }}
    >
      <div className={styles.close} onClick={() => setShowNavBar(false)}>
        <i className={`fas fa-times ${styles.close_icon}`}></i>
      </div>

      <ul className={styles.nav}>
        {menu.map((item, index) => (
          <li className={styles.nav_item} key={index}>
            <Link href="/">
              <a className={styles.nav_link}> {item.title} </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.extra}>
        <Link href="/">
          <a className={styles.extra_link}>Kwek’s Response to COVID-19</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
