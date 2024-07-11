import classes from './App.module.css';
import { Header } from '../Header';
import { Body } from '../Body';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className={classes.main}>
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
