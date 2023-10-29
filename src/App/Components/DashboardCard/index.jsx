import './styles.css';

export const DashboardCard = (props) => {
  return (
    <div className="dashboard-card-wrapper">
      <p className="dashboard-card-title">{props.title}</p>
      <p className="dashboard-card-logo">{props.logo}</p>
      <p className="dashboard-card-description">{props.opis}</p>
      <a href="#" className="dashboard-card-navlink">
        zobacz więcej &rarr;
      </a>
    </div>
  );
};

export default DashboardCard;
