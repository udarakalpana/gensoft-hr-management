import Routers from "./utlities/routers/Routers.jsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

const App = () => {

  return (
     <Routers />
  )
}

export default App
