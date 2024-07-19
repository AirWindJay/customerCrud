import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerView from './components/CustomerView';
import CustomerUpdate from './components/CustomerUpdate';
import CustomerDelete from './components/CustomerDelete';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<CustomerList />} />
            <Route path="/customer/new" element={<CustomerForm />} />
            <Route path="/customer/view/:id" element={<CustomerView />} />
            <Route path="/customer/update/:id" element={<CustomerUpdate />} />
            <Route path="/customer/delete/:id" element={<CustomerDelete />} />
        </Routes>
        </Router>
    );
}

export default App;
