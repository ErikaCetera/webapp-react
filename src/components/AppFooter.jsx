const AppFooter = () => {
    return(
        <>
        <footer className="bg-dark text-white mt-5">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-4">
                <h5>Contact</h5>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Email</a></li>
                    <li><a href="#" className="text-white">Phone</a></li>
                    <li><a href="#" className="text-white">Address</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Facebook</a></li>
                    <li><a href="#" className="text-white">Twitter</a></li>
                    <li><a href="#" className="text-white">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
        </>
    )
};

export default AppFooter;