import React from 'react';
import { Container } from "@cerebral/react";
import './App.css';
import TodoApp from './components/TodoApp';
import app from './app';

function Main() {
  return (
    <div className="todoapp">
      <Container app={app}>
        <TodoApp />
      </Container>,
    </div>
  );
}

export default Main;
