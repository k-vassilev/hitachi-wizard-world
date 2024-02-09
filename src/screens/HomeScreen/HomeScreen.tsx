import Table from '../../components/Table/Table';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
import useHousesData, { IHouseData } from '../../hooks/useHouseData';
import './homeScreen.css';

const HomeScreen = () => {
  const { data, addHouseData } = useHousesData();
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleFormSubmit = (formData: IHouseData) => {
    addHouseData(formData);
    closeModal();
  };

  return (
    <div className="home-screen">
      <h1>Hogwarts houses's data</h1>
      <div className="table-container">
        {data ? <Table data={data} /> : <p>Loading...</p>}
      </div>
      <button onClick={openModal}>Add new house</button>
      {isModalOpen && <Modal handleClose={closeModal} onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default HomeScreen;