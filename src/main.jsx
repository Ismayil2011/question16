import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MousePositionTracker from './components/MousePositionTracker';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MousePositionTracker />
  </StrictMode>
);
