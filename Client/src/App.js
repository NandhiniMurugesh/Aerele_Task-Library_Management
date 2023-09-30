import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Login/login';
import { Librariandashboard } from './Librarian Home/librarianhome';
import { Addmember } from './Addmember/addmem';
import { Memberlist } from './Member List/memberlist';
import { Userupdate } from './Member List/userupdate';
import { Addbook } from './AddBook/addbook';
import { Booklist } from './Booklist/booklist';
import { Bookupdate } from './Booklist/bookupdate';
import { Issuebook } from './Issue Book/issuebook';
import { TransactionList } from './Transaction/transactionlist';
import { Transupdate } from './Transaction/transupdate';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/libdash/:id' element={<Librariandashboard/>}/>
    <Route path='/addmem' element={<Addmember/>}/>
    <Route path='/memlist' element={<Memberlist/>}/>
    <Route path='/userupdate/:id' element={<Userupdate/>}/>
    <Route path='/addbook' element={<Addbook/>}/>
    <Route path='/booklist' element={<Booklist/>}/>
    <Route path='/bookupdate/:bookid' element={<Bookupdate/>}/>
    <Route path='/issuebook/:bookid' element={<Issuebook/>}/>
    <Route path='/transaction' element={<TransactionList/>}/>
  
    <Route path='/transupdate/:transid' element={<Transupdate/>}/>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
