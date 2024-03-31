import { useState } from 'react';

export const ActionsBtn = ({ row, table }) => {
  const meta = table.options.meta;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const openModal = () => {
    console.log('click');
    setModalIsOpen(true);
    const setEditedRows = e => {
      const elName = e.currentTarget.name;
      meta?.setEditedRows(old => ({
        ...old,
        [row.id]: !old[row.id],
      }));
    };
    // setSelectedPsychologist(selectPsychologist);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return <div onClick={openModal}>...</div>;
};

export const ActionsBtn1 = ({ row, table }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
        <div onClick={setEditedRows} name="edit">
          ...
        </div>
      )}
    </div>
  );
};
