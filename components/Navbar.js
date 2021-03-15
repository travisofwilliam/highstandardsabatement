const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img className='logo' src={require('../images/companyLogo.png')} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse links" style={{color: 'black'}} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-3">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Home</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Services</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Reviews</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Contact</strong></a>
                    </li>
                </ul>
                <button className="btn btn-danger my-2 my-sm-0 nav-button" type="submit"><strong><i className="fas fa-phone pr-2"></i>(760)-550-7739</strong></button>
            </div>
        </nav>
    )
}

export default Navbar