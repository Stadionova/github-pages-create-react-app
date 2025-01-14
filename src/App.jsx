import MainPage from './MainPage/MainPage';
import classes from './App.module.scss';
import Trip from './Trip/Trip';
import { Route, Switch } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import EachDayContainer from './EachDay/EachDayContainer';
import CityDescComponentContainer from './CityDescComponent/CityDescComponentContainer';
import React from "react";
import DayDescriptionContainer from './DayDescription/DayDescriptionContainer';
import ByCities from './ByCities/ByCities';
import CityContainer from './City/CityContainer';

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('[class*=navigation]')
      && (document.querySelector('[class*=navigation]').style.boxShadow = 'var(--shd-scrl,0 0 5px rgba(0,0,0,.5))');
  } else {
    document.querySelector('[class*=navigation]')
      && (document.querySelector('[class*=navigation]').style.boxShadow = 'none');
  }
});

const App = () => {
  return (
    <div className={classes.app}>
      {/* Route компонента следит за адресной строкой браузера
      и как только она увидит, что её path совпадает с адрес строкой,
      она автоматич запуск рендер и отрисовыв то, что должна */}
      <Switch>
        <Route path='/trip' component={Trip} />
        <Route path='/equipment' component={Equipment} />
        <Route path='/day' component={EachDayContainer} />
        <Route path='/aboutcity' component={CityDescComponentContainer} />
        <Route path='/dayDesc' component={DayDescriptionContainer} />
        <Route path='/cities' component={ByCities} />
        <Route path='/city' component={CityContainer} />
        <Route path='/' component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
