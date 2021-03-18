import { useSelector } from 'react-redux'
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/login/Login"
import { selectUser } from "./features/userSlice"


function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      {user ? <Dashboard /> :  <Login />}
    </div>
  );
}

export default App;
