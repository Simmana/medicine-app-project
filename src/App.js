import './assets/css/style.css';
import MainPage from "./Pages/MainPage.jsx";
import Header from "./components/Header.jsx";
import InfoPage from "./Pages/InfoPage.jsx";
import Finance from "./Pages/Finance.jsx";
import News from "./Pages/News.jsx";
import {Routes, Route, useLocation} from "react-router-dom";
import PostPage from './Pages/PostPage.jsx';

function App() {
  const location = useLocation();
  let quotesLatin = '';
  let quotesRussian = '';

  switch (location.pathname) {
    case '/':
      quotesLatin = 'Prímum nóli nocēre';
      quotesRussian = 'Прежде всего - не навреди';
      break;
    case '/finance':
      quotesLatin = 'Qui quaerit, repĕrit';
      quotesRussian = 'Кто ищет, тот находит';
      break;
    case '/news':
      quotesLatin = 'Scientia potentia est';
      quotesRussian = 'Знание – сила';
      break;
    case '/info':
      quotesLatin = 'Tempus vulnera sana';
      quotesRussian = 'Время лечит раны';
      break;
    case location.pathname.match(/\/post\/\d+/)?.[0]:
      quotesLatin = 'Oratio medicus est';
      quotesRussian = 'Утешения облегчают боль';
      break;
    default:
      break;
  }
  return (
    <>
      <Header quotesLatin={quotesLatin} quotesRussian={quotesRussian} />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/finance" element={<Finance />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/info" element={<InfoPage />}/>
          <Route path="/post/:id" element={<PostPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
