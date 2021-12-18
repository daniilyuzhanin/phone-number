import './App.scss';
import { PhoneForm } from 'common/components/PhoneForm';
import { PhoneTable } from 'common/components/PhoneTable';

export const App = () => {

  return (
    <div className="wrapper">
      <PhoneForm />
      <PhoneTable />
    </div>
  );
}