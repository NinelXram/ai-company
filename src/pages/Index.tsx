
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // In a real app, this would check auth state
  // const isAuthenticated = false;

  // // If not authenticated, redirect to login
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  // If authenticated, redirect to chat page
  return <Navigate to="/chat" replace />;
};

export default Index;
