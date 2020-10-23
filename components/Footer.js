const Footer = () => {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Checkout my Github account to see what I am working on and also the
          code of the projects I have made. In my LinkedIn account I usually
          post my certificates and share some interesting posts from other
          pages, feel free to connect. Any question or offer, you can contact me
          via email or call me to my phone number.
        </p>
        <ul className="contact">
          <li className="icon solid fa-home">
            Carrera 60 #160-95 <br />
            Bogotá D.C., Colombia
          </li>
          <li className="icon solid fa-phone">+57 (310) 571-0613</li>
          <li className="icon solid fa-envelope">
            <a href="#">tpereza@unal.edu.co</a>
          </li>
          <li className="icon brands fa-linkedin">
            <a
              href="https://linkedin.com/in/tom-pérez-34608813a"
              target="_blank"
            >
              linkedin.com/in/tom-pérez-34608813a
            </a>
          </li>
          <li className="icon brands fa-github">
            <a href="https://github.com/tpereza" target="_blank">
              github.com/tpereza
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled Inc. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
