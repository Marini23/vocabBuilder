import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layuot } from './Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
// import { selectIsAuth } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import RestrictedRoute from './RestrictedRoute';
import { DictionaryPage } from 'pages/DictionaryPage/DictionaryPage';

export const App = () => {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
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
          <Route path="logout" element={<div>Log Out</div>} />
          <Route path="dictionary" element={<DictionaryPage />} />
          <Route path="recommend" element={<div>Recommend</div>} />
          <Route path="training" element={<div>Training</div>} />
          <Route path="*" element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
