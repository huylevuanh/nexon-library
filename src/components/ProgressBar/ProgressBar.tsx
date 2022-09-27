import "./ProgressBar.scss";
import {progressTitles} from '../../constants/index';
import {useTranslation} from 'react-i18next';

interface IProgresBar {
  step: number;
}
const ProgressBar = ({ step }: IProgresBar): JSX.Element => {
  const {t} = useTranslation()
  return (
    <div className="timeline-wrapper">
      {progressTitles.map((title, index) => {
        return (
          <div key={title} className={`node ${index + 1=== step ? 'active': ''}`}>
            <p>{index + 1=== step && t(title)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
