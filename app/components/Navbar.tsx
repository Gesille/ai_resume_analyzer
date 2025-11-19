import { Link } from "react-router";

const Navbar: () => React.JSX.Element = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[98%] max-w-[1300px] z-50 backdrop-blur-lg bg-white/50 shadow-lg rounded-4xl px-6 md:px-10 py-3 flex justify-between items-center transition-all duration-300 hover:shadow-xl">


            <Link to="/">
                <p className="text-2xl md:text-2xl font-extrabold text-gradient cursor-pointer hover:scale-105 transition-transform duration-300">
                    RESUMIND
                </p>
            </Link>


            <Link
                to="/upload"
                className="px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#8e98ff] to-[#606beb] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;
