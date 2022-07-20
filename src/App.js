import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Login } from '../src/pages/Login/Login';
import { TableIssues } from './pages/Table/Table';
// import { CreateUser } from './pages/User/CreateUser';
import { CreatePage } from './pages/Create/CreatePage';
import { CreateItem } from './pages/Create/CreateItem';
import { CreateUser } from './pages/Create/CreateUser';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" bg="gray.50" h="100vh">
        <Header />
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chamados" element={<TableIssues />} />
            <Route path="/cadastro/" element={<CreatePage />} />
            <Route path="/cadastro/item" element={<CreateItem />} />
            <Route path="/cadastro/usuario" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
