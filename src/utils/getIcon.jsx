import RavenIcon from '../components/common/Icons/RavenIcon/RavenIcon';
import ProfileIcon from '../components/common/Icons/ProfileIcon/ProfileIcon';
import DialogsIcon from '../components/common/Icons/DialogsIcon/DialogsIcon';
import UsersIcon from '../components/common/Icons/UsersIcon/UsersIcon';
import NewsIcon from '../components/common/Icons/NewsIcon/NewsIcon';
import MusicIcon from '../components/common/Icons/MusicIcon/MusicIcon';
import SettingsIcon from '../components/common/Icons/SettingsIcon/SettingsIcon';
import DocumentIcon from '../components/common/Icons/DocumentIcon/DocumentIcon';
import EmptyHeartIcon from '../components/common/Icons/EmptyHeartIcon/EmptyHeartIcon';
import FilledHeartIcon from '../components/common/Icons/FilledHeartIcon/FilledHeartIcon';

const icons = {
    raven: <RavenIcon />,
    profile: <ProfileIcon />,
    dialogs: <DialogsIcon />,
    users: <UsersIcon />,
    news: <NewsIcon />,
    music: <MusicIcon />,
    settings: <SettingsIcon />,
    document: <DocumentIcon />,
    emptyHeart: <EmptyHeartIcon />,
    filledHeart: <FilledHeartIcon />,

};

const getIcon = iconName => icons[iconName];

export default getIcon;
