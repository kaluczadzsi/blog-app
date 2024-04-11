import { useState } from 'react';
import { MdDeleteOutline, MdDelete } from 'react-icons/md';
import Modal from './Modal';

const DeletePostButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isModalOpen) return <Modal />;

  return (
    <div>
      {isHovered ? (
        <button
          onClick={handleOpenModal}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MdDelete className="text-4xl text-red-700" />
        </button>
      ) : (
        <button onMouseEnter={() => setIsHovered(true)}>
          <MdDeleteOutline className="text-4xl text-[#087ea4]" />
        </button>
      )}
    </div>
  );
};

export default DeletePostButton;
