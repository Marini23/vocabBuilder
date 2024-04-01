import { Filters } from 'components/Filters/Filters';
import { WordsTable } from 'components/WordsTable/WordsTable';

export const Dashboard = () => {
  return (
    <div>
      <Filters />
      <WordsTable />
    </div>
  );
};
