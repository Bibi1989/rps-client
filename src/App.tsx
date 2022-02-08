import { Routes, Route } from "react-router-dom";

import RockScissorsPaperPage from "pages/rockscissorspaper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RockScissorsPaperPage />} />
    </Routes>
  );
};

export default App;
