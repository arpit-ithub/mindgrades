import Community from "./components/Community/CommunitySection/communitySection"; 
import Navbar from "./components/Navbar/navbar";
import PracticeTag from "./components/PracticeTag/practiceTag";
import Sidebar from "./components/Sidebar/sidebar";
import "./App.css"

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <div className="main-page">
          <div className="community">
            <Community />
          </div>
          <div className="practice">
            <PracticeTag />
          </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
