import React, { useState } from 'react';
import { IHouseData } from '../../hooks/useHouseData';
import { v4 as uuidv4 } from 'uuid';
import './form.css';

interface FormProps {
  onSubmit: (formData: IHouseData) => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<IHouseData>({
    id: '',
    name: '',
    houseColours: '',
    founder: '',
    animal: '',
    element: '',
    ghost: '',
    commonRoom: '',
    heads: [],
    traits: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const houseWithId = { ...formData, id: uuidv4() };
    onSubmit(houseWithId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={5}
          maxLength={20}
        />
      </div>
      <div>
        <label htmlFor="animal">Animal:</label>
        <select
          id="animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          required
        >
          <option value="">Select Animal</option>
          <option value="giraffe">Giraffe</option>
          <option value="dolphin">Dolphin</option>
          <option value="armadillo">Armadillo</option>
          <option value="unicorn">Unicorn</option>
        </select>
      </div>
      <div>
        <label htmlFor="ghost">Ghost:</label>
        <input
          type="text"
          id="ghost"
          name="ghost"
          value={formData.ghost}
          onChange={handleChange}
          required
          pattern="^(?!Arnold).*$"
        />
      </div>
      <div>
        <label htmlFor="commonRoom">Common Room:</label>
        <input
          type="text"
          id="commonRoom"
          name="commonRoom"
          value={formData.commonRoom}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Add House</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;