import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import UsersPage from './pages/UsersPage/UsersPage';
import PageUnderConstruction from './pages/PageUnderConstruction/PageUnderConstruction';

const App = () => {
    return (
        <>
            <Header />
            <div className="appWrapper">
                <Navbar />
                <Routes>
                    <Route path="/profile" Component={ProfilePage} />
                    <Route path="/dialogs" Component={DialogsPage} />
                    <Route path="/users" Component={UsersPage} />
                    <Route path="*" Component={PageUnderConstruction} />
                </Routes>
            </div>
        </>
    );
};

export default App;
