import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const links = ['home', 'about', 'appointment', 'service', 'contact'];
  const location = useLocation();
  return (
    <header>
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <ul className="top-bar-info list-inline-item pl-0 mb-0">
                <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@med.com</a></li>
                <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, Almaty, Kazakhstan </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-end top-right-bar mt-2 mt-lg-0">
                <a href="tel:+23-345-67890">
                  <span>Call Now : </span>
                  <span className="h4">8(777)-456-1345</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" alt="" className="img-fluid" />
          </Link>

          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
            aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              {links.map((link) => (
                <li className={`nav-item ${ location.pathname.slice(1).replace(/\/+$/, '') === link ? 'active' : ''}`}><Link className="nav-link" to={link}>{link.charAt(0).toUpperCase() + link.slice(1)}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;