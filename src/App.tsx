import './App.scss';
import { PhoneForm } from 'common/components/PhoneForm';

export const App = () => {
  return (
    <div className="wrapper">
      <PhoneForm />
      <div>
        Table
      </div>
    </div>
  );
}