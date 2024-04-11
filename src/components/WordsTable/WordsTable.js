// import { useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table, Td, Th, Thead } from './WordsTable.styled';
import { fetchUserWords } from '../../redux/wordsSlice/wordsOperations';
import { selectUserWords } from '../../redux/selectors';

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
  useEffect(() => {
    dispatch(fetchUserWords());
  }, [dispatch]);

  const [editedRows, setEditedRows] = useState({});
  const userWordsList = useSelector(selectUserWords);
  const data = useMemo(() => userWordsList, [userWordsList]);
  const tableData = useMemo(() => data, [data]);
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
