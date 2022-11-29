import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Groups from "../Groups/Groups";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Students from "../Students/Students";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <Header />
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="guruhlar" element={<Groups />} />
          <Route path="oquvchilar" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
