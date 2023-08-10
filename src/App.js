import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import "./Style/LandingPage.css"
import Projects from './components/Projects'
import Pendidikan from './components/Pendidikan';
import TentangSaya from './components/Tentang';
import MySkill from './components/Skill';
import Review from './components/Review';
function App() {
  return (
    <div className='myBG'>
      <NavigationBar/>
      <Intro />
      <About/>
      <Projects/>
      <MySkill/>
      <Review/>
      <TentangSaya/>
      <Pendidikan/>
      </div>
  );
}
export default App