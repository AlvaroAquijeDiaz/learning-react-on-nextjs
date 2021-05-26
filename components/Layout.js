import Navbar from './Navbar';
// The { children } is anything nested inside the component in _app.js
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      {/* Footer */}
    </div>
  );
};

export default Layout;
