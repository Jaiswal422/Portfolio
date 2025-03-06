const Layout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </header>
        <main className="mt-16 p-6">{children}</main>
      </div>
    );
  };
  
  export default Layout;
  