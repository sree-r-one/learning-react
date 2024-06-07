import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="space-x-4 bg-green-700 p-2 shadow-2xl">
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Navbar;
