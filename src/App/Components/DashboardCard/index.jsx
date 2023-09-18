import './styles.css';

export const DashboardCard = (cos) => {
  return (
    <div className="dashboard-card-wrapper">
      <p className="dashboard-card-title">{cos.title}</p>
      <p className="dashboard-card-logo">{cos.logo}</p>
      <p className="dashboard-card-description">{cos.opis}</p>
      <a href="#" className="dashboard-card-navlink">
        zobacz więcej &rarr;
      </a>
    </div>
  );
};

export default DashboardCard;
