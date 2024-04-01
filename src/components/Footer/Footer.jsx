import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">
        &copy; 2024 Corporate. All Right Reserved.
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
};

export default Footer;
