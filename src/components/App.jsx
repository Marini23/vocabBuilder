import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layuot } from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
// import { selectIsAuth } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import RestrictedRoute from './RestrictedRoute';
import { DictionaryPage } from 'pages/DictionaryPage/DictionaryPage';
import PrivateRoute from './PrivateRoute';
// import { selectIsAuth } from '../redux/selectors';
import { selectIsRefreshing } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsRefreshing);
  // console.log(isAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          {/* <Route index element={isAuth ? <LoginPage /> : <RegisterPage />} /> */}
          <Route index element={<LoginPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="logout"
            element={
              <RestrictedRoute redirectTo="/login" component={<LoginPage />} />
            }
          />
          <Route
            path="dictionary"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<DictionaryPage />}
              />
            }
          />
          <Route path="recommend" element={<div>Recommend</div>} />
          <Route path="training" element={<div>Training</div>} />
          <Route path="*" element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
