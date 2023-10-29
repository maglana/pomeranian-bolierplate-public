import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul className="aside-list">
          <li>
            <NavLink to="dashboard">
              <div className="aside-row">
                <HouseIcon />
                Dashboard
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="CV">
              <div className="aside-row">
                <PersonalCardIcon />
                {/* <span>CV</span> Propozycja */}
                CV
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <div className="aside-row">
                <EditIcon />
                Ćwiczenia
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              <div className="aside-row">
                <ElementIcon />
                Blog
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="FAQ">
              <div className="aside-row">
                <ElementIcon />
                FAQ
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="TechStack">
              <div className="aside-row">
                <ElementIcon />
                TechStack
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises/js/hit-the-mole">
              <div className="aside-row">
                <ElementIcon />
                Gra | Krecik
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises/js/MemoGame">
              <div className="aside-row">
                <ElementIcon />
                Gra | Memo
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises/react/Forms2">
              <div className="aside-row">
                <ElementIcon />
                Formularz
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
