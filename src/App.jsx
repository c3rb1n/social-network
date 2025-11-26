import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DialogsPage from './pages/DialogsPage/DialogsPage';
import UsersPage from './pages/UsersPage/UsersPage';
import PageUnderConstruction from './pages/PageUnderConstruction/PageUnderConstruction';

const App = ({store}) => {
    return (
        <>
            <Header />
            <div className="appWrapper">
                <Navbar navElements={store.navbar.navElements} />
                <Routes>
                    <Route path="/profile" element={<ProfilePage profilePage={store.profilePage} />} />
                    <Route path="/dialogs" element={<DialogsPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="*" element={<PageUnderConstruction />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
