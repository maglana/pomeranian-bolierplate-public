import './styles.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { GithuubIcons } from '../Components/Icons/GithuubIcons';
const techStackData = [
  {
    title: 'CSS',
    src: 'https://cdn.icon-icons.com/icons2/2566/PNG/512/css_icon_153522.png',
    alt: 'CSS logo',
  },

  {
    title: 'Redux',
    src: require('../Images/tech-stack/redux.png'),
    alt: 'Redux logo',
  },

  {
    title: 'React',
    src: '/Images/react.svg',
    alt: 'React logo',
  },
  {
    title: 'JS',
    src: '../Images/js.svg',
    alt: 'JavaScript logo',
  },
  {
    title: 'HTML',
    component: <HtmlIcon />,
    alt: 'Html logo',
  },
  {
    title: 'TypeScript',
    src: require('../Images/tech-stack/ts-logo-256 1.png'),
    alt: 'logo TypeScript',
  },
  {
    title: 'Github',
    component: <GithuubIcons />,
    alt: 'Github',
  },
  {
    title: 'vscode',
    src: require('../Images/tech-stack/vscode-alt1.png'),
    alt: 'vscode',
  },
  {
    title: 'discord',
    src: require('../Images/tech-stack/discord-icon-svgrepo-com3.png'),
    alt: 'discord',
  },
  {
    title: 'jira',
    src: require('../Images/tech-stack/jira1.png'),
    alt: 'jira',
  },
  {
    title: 'redmine',
    src: require('../Images/tech-stack/redmine.png'),
    alt: 'redmine',
  },
];

export function TechStack() {
  return (
    <div className="techstack">
      <h2 className="techstack-title">Tech Stack</h2>

      <p className="techstack-description">
        Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
        podczas kursu.
      </p>

      <div className="techstack-cards">
        {techStackData.map((element) => {
          return (
            <div className="techstack-card">
              {element.src && (
                <img
                  className="techstack-card-image"
                  src={element.src}
                  alt={element.alt}
                />
              )}

              {element.component && element.component}

              <p className="tech-stack-card-title">{element.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
