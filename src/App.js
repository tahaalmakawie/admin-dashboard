import React from "react";
import styled from "styled-components";
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar'

export default  function App() {
  return (
    <Div>
      <Sidebar/>
      <Dashboard/>
    </Div>
  );
}

const Div = styled.div``


