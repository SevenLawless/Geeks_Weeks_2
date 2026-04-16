function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-red-500">Company</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;