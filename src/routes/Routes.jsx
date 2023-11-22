import { Switch, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import EmployeeCreateAccount from "../screen/createAccount/EmployeeCreateAccount";
import EmployerCreateAccount from "../screen/createAccount/EmployerCreateAccount";
import AdminScreen from "../screen/AdminScreen/AdminScreen";
import WorkerScreen from "../screen/WorkerScreen/WorkerScreen";
import { UserScreen } from "../screen/UserScreen/UserScreen";
import NewRequest from "../components/NewRequest/NewRequest";
import DisplayWorkerById from "../components/NewRequest/DisplayWorkerById";
import UserAccount from "../screen/UserScreen/UserAccount";
import { AdminWorkerScreen } from "../screen/AdminScreen/AdminWorkerScreen";
import { AdminUserScreen } from "../screen/AdminScreen/AdminUserScreen";
import AdminBookingScreen from "../screen/BookingScreen/AdminBookingScreen";
import AdminBookingDetailScreen from "../screen/AdminScreen/AdminBookingDetailScreen";
import AdminCompleteBookingScreen from "../screen/AdminScreen/AdminCompleteBookingScreen";
import HolidayRequestForm from "../screen/WorkerScreen/WorkerScreen";
import AdminHolidayScreen from "../screen/AdminScreen/AdminHolidayScreen";
import WorkerAccount from "../screen/WorkerScreen/WorkerAccount";

const ROUTES = [
  {
    path: `/User/user-detail`,
    key: "user",
    component: UserAccount,
    isPrivate: true,
    exact: true,
  },
  {
    path: `/Worker/Worker-detail`,
    key: "worker",
    component: WorkerAccount,
    isPrivate: true,
    exact: true,
  },
  {
    path: `/Admin/users-list`,
    key: "admin-users-screen",
    component: AdminUserScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: `/Admin/BookingDetail/:id`,
    key: "admin-bookingDetail-screen",
    component: AdminBookingDetailScreen,
    isPrivate: true,
    exact: true,
  },

  {
    path: `/Admin/workers-list`,
    key: "admin-worker-screen",
    component: AdminWorkerScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: `/Admin/NewRequest/:id`,
    key: "pendingworker",
    component: DisplayWorkerById,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/Admin/NewRequest",
    key: "NewRequest",
    component: NewRequest,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/Admin/Holiday",
    key: "Holiday-Admin",
    component: AdminHolidayScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/User",
    key: "UserScreen",
    component: UserScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/Worker",
    key: "EmployeeScreen",
    component: WorkerScreen,
    isPrivate: true,
    exact: true,
  },

  {
    path: "/Admin/CompletedBooking",
    key: "Admin-completed-Booking-Screen",
    component: AdminCompleteBookingScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/Admin/Booking",
    key: "AdminScreen",
    component: AdminBookingScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/Admin",
    key: "AdminScreen",
    component: AdminScreen,
    isPrivate: true,
    exact: true,
  },
  {
    path: "/create-account/Employee",
    key: "create-account-employee",
    component: EmployeeCreateAccount,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/create-account/Employer",
    key: "create-account-employer",
    component: EmployerCreateAccount,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/Login",
    key: "Login",
    component: LoginScreen,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/",
    key: "HomeScreen",
    component: HomeScreen,
    isPrivate: false,
    exact: true,
  },
];

export default ROUTES;

export function RenderRoutes({ routes, token }) {
  console.log(token);
  return (
    <Switch>
      {routes.map((route) => {
        return route.isPrivate ? (
          <PrivateRoutes
            isLoggedIn={!!token}
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.key}
            isPrivate={route.isPrivate}
            name={route.key}
          />
        ) : (
          <PublicRoutes
            isLoggedIn={!!token}
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.key}
            isPrivate={route.isPrivate}
            name={route.key}
          />
        );
      })}

      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
