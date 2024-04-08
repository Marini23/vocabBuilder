import { AddWordBtn } from 'components/AddWordBtn/AddWordBtn';
import { Filters } from 'components/Filters/Filters';
import { Statictics } from 'components/Statisticts/Statictics';
import { WordsTable } from 'components/WordsTable/WordsTable';

export const Dashboard = () => {
  return (
    <div>
      <Filters />
      <Statictics />
      <AddWordBtn />
      <WordsTable />
    </div>
  );
};
