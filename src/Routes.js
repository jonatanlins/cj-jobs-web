import React from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './services/api';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Job from './pages/Job';
import NewJob from './pages/NewJob';
import Contratantes from './pages/Contratantes';
// import Candidatos from './pages/Candidatos';
import NewContratante from './pages/NewContratante';
// import NewCandidato from './pages/NewCandidato';

function Routes() {
  const dispatch = useDispatch();

  const updateData = type => ({ data }) => dispatch({ type, data });

  const update = () => {
    api.get('/contratantes').then(updateData('SET_CONTRATANTE'));
    api.get('/candidatos').then(updateData('SET_CANDIDATO'));
    api.get('/vagas').then(updateData('SET_VAGA'));
  };

  React.useEffect(() => {
    update();
    setInterval(update, 5000);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs/new" component={NewJob} />
      <Route exact path="/jobs/:id" component={Job} />
      <Route exact path="/contratantes" component={Contratantes} />
      <Route exact path="/contratantes/new" component={NewContratante} />
      {/* <Route exact path="/candidatos" component={Candidatos} />
      <Route exact path="/candidatos/new" component={NewCandidato} /> */}
    </Switch>
  );
}

export default Routes;
