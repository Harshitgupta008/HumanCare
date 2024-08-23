import NavbarCom from "./component/commonComponent/NavbarCom"
import NavbarDoc from "./component/doctorComponent/NavbarDoc";
import NavbarClient from "./component/clientComponent/NavbarClient";
import CommonRoute from "./Router/CommonRoute"
import Footer from "./Footer"
import { Useauth } from "./Auth";
import DocRoute from "./Router/DocRoute";
import ClientRoute from "./Router/ClientRoute";
function App() {
  const { loggedDoctor } = Useauth();
  const { loggedpatient } = Useauth();
  return (
    <>
      {
        loggedDoctor ?
          <>
            <NavbarDoc />
            <DocRoute />
          </>
          :
          loggedpatient ?
            <>
              <NavbarClient />
              <ClientRoute />
            </>
            :
            <>
              <NavbarCom />
              <CommonRoute />
            </>

      }
      <Footer />
    </>
  )
}

export default App
