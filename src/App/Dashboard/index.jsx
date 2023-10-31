import './styles.css';
import DashboardCard from '../Components/DashboardCard';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import photo from '../Images/MG_CV.png';
import { RoundImage } from '../Components/RoundImage/RoundImage';

export const Dashboard = () => {
  const kafelki = [
    {
      title: 'Moje CV',
      logo: <CalendarIcon />,
      opis: 'podgląd cv wraz z doświadczeniem',
    },
    {
      title: 'Ćwiczenia',
      logo: <EditIcon />,
      opis: 'wszystkie wykonane ćwiczenia',
      
    },
    {
      title: 'Formularz',
      logo: <ElementIcon />,
      opis: 'formularz zamówień',
    },
    {
      title: 'Tech stack',
      logo: <SettingIcon />,
      opis: 'stack technologiczny realizowany na kursie',
    },
    {
      title: 'FAQ',
      logo: <PersonalCardIcon />,
      opis: 'odpowiedzi na najczęstsze pytania',
    },
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-header"> 👋 Hej tu Magda!</h2>
      <p className="dashboard-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards-wrapper">
        {kafelki.map((kafelek) => {
          return (
            <DashboardCard
              title={kafelek.title}
              logo={kafelek.logo}
              opis={kafelek.opis}
              
            />
          );
        })}
      </div>

      <div className="dashboard-personal-info">
        <div className="Image">
          <RoundImage src={photo} size="150px" />
        </div>
        <p>Magdalena Gadomska</p>
        <p>Toruń</p>
        <p>e-mail: m.srutkowska@gmail.com</p>
      </div>
    </div>
  );
};
