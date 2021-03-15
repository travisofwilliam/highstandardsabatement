const Jumbotron = () => {
    return (
        <div style={{ height: '300px'}}>
            <div className='jumbo'>
            </div>
            <div className='jumbo-inner'>
            <h1 className='jumbo-header'><strong>San Diego’s Restoration/Renovation Professionals</strong></h1>
                <br/>
                <br/>
                <p className='tagline'><strong>When standards matter most.</strong></p>
                <br/>
                <br/>
                <p><button className="btn btn-danger jumbo-button" type="submit">
                        <i className="fas fa-phone pr-2"></i>
                        (760)-550-7739
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Jumbotron