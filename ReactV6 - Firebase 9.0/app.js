import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Browse, Signin, Signup} from './pages';
import { ProtectedRoute, UserRedirect } from './helpers/routes';

export default function App() {
/// Updated Paths to using React V6

return (
    <> 
    <Router>
      <Routes>
        <Route 
          exact path ={ROUTES.HOME}  // With V6 with need to wrap our component with our Redirect/Protected Routes
          element={<UserRedirect path={ROUTES.BROWSE}>
                    <Home/>
                  </UserRedirect>}
        />
        <Route 
          exact path ={ROUTES.SIGN_IN} 
          element={<UserRedirect path={ROUTES.BROWSE}>
                    <Signin/>
                   </UserRedirect>
                }
        />
        <Route 
          exact path ={ROUTES.BROWSE} 
          element={<ProtectedRoute path={ROUTES.SIGN_IN}>
                    <Browse/>
                  </ProtectedRoute>}
        />
        <Route 
          exact path ={ROUTES.SIGN_UP} 
          element={<UserRedirect path={ROUTES.BROWSE}>
                    <Signup/>
                  </UserRedirect>}
        />
      </Routes>
    </Router>
    </>
  )
}