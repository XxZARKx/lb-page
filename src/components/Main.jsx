import MainViewComponents from './principalComponents/MainViewComponents';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProductView } from './principalComponents/CoursesView/CourseView';

const Main = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainViewComponents />} />
          <Route path="/courses/:id" element={<ProductView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main