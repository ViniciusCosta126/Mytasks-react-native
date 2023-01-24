import React from 'react';
import {TasksProvider} from './src/context/TasksContext';

import {Home} from './src/pages/Home';

export default function App() {
  return (
    <TasksProvider >
      <Home />
    </TasksProvider>
  );
}
