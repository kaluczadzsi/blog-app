import { IoIosClose } from 'react-icons/io';

const Modal = () => {
  return (
    <div className="p-4 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <div className="bg-white p-5 rounded flex flex-col">
          <div className="text-center flex flex-col-reverse">
            <h3 className="text-3xl text-secondary font-bold mb-10">
              Are you sure?
            </h3>
            <button className="self-end">
              <IoIosClose className="text-[#087ea4] text-5xl" />
            </button>
          </div>
          <div className="flex  border-red-200 gap-8 m-auto">
            <button className="text-lg font-semibold py-2 border-2 border-silv rounded-full hover:bg-silv w-[200px]">
              No
            </button>
            <button className="text-lg font-semibold py-2 border-0 bg-[#087ea4] hover:bg-[#087da4e0] text-white rounded-full  w-[200px]">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
