// import { useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUserId } from '../../redux/selectors';
import { fetchUserWords } from '../../redux/wordsSlice/wordsOperations';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table, Td, Th, Thead } from './WordsTable.styled';
import { ActionsBtn } from './ActionsBtn';

const fakeData = [
  {
    _id: '64c6e8d7abbd3d21328a00cf',
    en: 'run-ran-run',
    ua: 'бігти',
    category: 'verb',
    isIrregular: true,
    owner: '64c6dde64b0c8534d41f9b5c',
    progress: 50,
  },
  {
    _id: '64c6e8ecabbd3d21328a00d4',
    en: 'cat',
    ua: 'кіт',
    category: 'noun',
    owner: '64c6dde64b0c8534d41f9b5c',
    progress: 50,
  },
  {
    _id: '64c6e8f4abbd3d21328a00d9',
    en: 'dog',
    ua: 'пес',
    category: 'noun',
    owner: '64c6dde64b0c8534d41f9b5c',
    progress: 0,
  },
];

const EditCell = ({ row, table }) => {
  const meta = table.options.meta;
  const setEditedRows = e => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows(old => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== 'edit') {
      meta?.revertData(row.index, e.currentTarget.name === 'cancel');
    }
  };
  return (
    <div className="edit-cell-container">
      {meta?.editedRows[row.id] ? (
        <div className="edit-cell">
          <button onClick={setEditedRows} name="cancel">
            X
          </button>
          <button onClick={setEditedRows} name="done">
            ✔
          </button>
        </div>
      ) : (
        <button onClick={setEditedRows} name="edit">
          ✐
        </button>
      )}
    </div>
  );
};

const columnHelper = createColumnHelper();

const columnDef = [
  columnHelper.accessor('en', {
    header: 'Word',
  }),
  columnHelper.accessor('ua', {
    header: 'Translation',
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
  }),
  columnHelper.display({
    id: 'edit',
    cell: EditCell,
  }),
];

export const WordsTable = () => {
  const dispatch = useDispatch();
  const [editedRows, setEditedRows] = useState({});

  const data = useMemo(() => fakeData, []);

  const tableData = useMemo(() => data, []);
  const tableColumnDef = useMemo(() => columnDef, []);

  const table = useReactTable({
    columns: tableColumnDef,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      editedRows,
      setEditedRows,
    },
  });

  useEffect(() => {
    // dispatch(fetchUserWords());
  }, [dispatch]);

  return (
    <div>
      <Table>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Th>
              ))}
            </tr>
          ))}
        </Thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
