import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './routes/router';

import './locales/i18n';
import GlobalDialog from './global/GlobalDialog';
import { Provider } from 'react-redux';
import { store } from './redux/IndexRedux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//Ant design React19 호환
//import { unstableSetRender } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Router />
        <GlobalDialog />
      </DndProvider>
    </Provider>
  </StrictMode>
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
