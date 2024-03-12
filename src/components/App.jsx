import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}>
          <Route index element={<div>Home</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/login" element={<div>Log In</div>} />
          <Route path="/logout" element={<div>Log Out</div>} />
          <Route path="/dictionary" element={<div>Dictionary</div>} />
          <Route path="/recommend" element={<div>Recommend</div>} />
          <Route path="/training" element={<div>Training</div>} />
          <Route path="*" element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};
