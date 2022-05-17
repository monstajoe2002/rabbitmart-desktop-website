const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 class="h1">Rabbit</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/my-cart">Cart</a>
                <a href="/account">Account</a>
                <input type="text" placeholder="Search..."/>
                
            </div>
        </nav>
     );
}
 
export default Navbar;