import {
  Outlet,
} from "react-router-dom";
import { Header } from './components/header/Header'
import './css/main.css'


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
