import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
