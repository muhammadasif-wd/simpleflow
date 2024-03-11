
import DashBoard from '../pages/DashBoard/DashBoard/DashBoard'
import DashBoardAbout from '../pages/DashBoard/About/DashBoardAbout'
import DasBoardContact from '../pages/DashBoard/Contact/DasBoardContact'
import DashBoardPortFolio from '../pages/DashBoard/PortFolio/DashBoardPortFolio'
import AddNew from '../pages/DashBoard/AddNew/AddNew'
import DashBoardEvents from '../pages/DashBoard/Event/DashBoardEvents'
import Solutions from '../pages/DashBoard/Solutions/Solutions'

const AdminRoutes = [
    { path: '/dashboard', Component: DashBoard },
    { path: '/dashboard-about-us', Component: DashBoardAbout },
    { path: '/dashboard-contact', Component: DasBoardContact },
    { path: '/dashboard-portfolio', Component: DashBoardPortFolio },
    { path: '/dashboard-add-new', Component: AddNew },
    { path: '/dashboard-event', Component: DashBoardEvents },
    { path: '/dashboard-solution', Component: Solutions },
]
export default AdminRoutes;