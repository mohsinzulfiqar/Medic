import logo from "./logo.svg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/Theme";
import Navbar from "./layouts/Navbar";
import MasterDashboard from "./services/master-dashboard";
import DoctorOPD from "./services/HMOpd/doctor-opd";
import Indoor from "./services/HMIndoor/indoor";
import MedicalStaff from "./services/medical-staff";
import Login from "./features/authentication/components/login";
import PrivateRoutes from "./utils/private-routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LabColab from "./services/HMLabColab/lab-colab";
import SettingSecurity from "./services/setting-security";
import Checkout from "./services/checkout";
import ReceptionTokenGeneration from "./services/reception-token-generation";
import HospitalSettingStaper from "./services/hospital-setting-staper";
import AllPatient from "./services/HMAllPatient/all-patient";
import Home from "./services/home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Box>
        // <Navbar />
        <Outlet />
      </Box> */}
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MasterDashboard />} />
            <Route path="opd" element={<DoctorOPD />} />
            <Route path="opd/all-patient" element={<AllPatient />} />
            <Route path="indoor" element={<Indoor />} />
            <Route path="staff" element={<MedicalStaff />} />
            <Route path="lab" element={<LabColab />} />
            <Route path="security" element={<SettingSecurity />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="reception-token-generation" element={<ReceptionTokenGeneration />} />
            <Route path="hospital-settings" element={<HospitalSettingStaper />} />
            <Route path="home" element={<Home />} />



          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// <Router>
// <Routes>
//   <Route path="/" element={<App />} exact>
//   <Route path="login" element={<Login />} />
//     <Route path="" element={<MasterDashboard />} />
//     <Route path="opd" element={<DoctorOPD />} />
//     {/* <Route path="labCollabs" element={<LabCollabs />} /> */}
//     <Route path="indoor" element={<Indoor />} />
//     <Route path="staff" element={<MedicalStaff />} />
//   </Route>
// </Routes>
// </Router>
