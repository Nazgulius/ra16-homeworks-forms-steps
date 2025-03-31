import { useState } from 'react';
import React from 'react';

export interface IForm {
  date: string;
  distance: number;
}

export default function StepCheck() {
  const [steps, setSteps] = useState<IForm[]>([]);
  const [currentStep, setCurrentStep] = useState<IForm>({ date: '', distance: 0 });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingIndex !== null) {
      // Обновить существующий шаг  
      const updatedSteps = steps.map((step, index) =>
        index === editingIndex ? currentStep : step
      );
      setSteps(updatedSteps);
      setEditingIndex(null);
    } else {
      // Добавить новый шаг  
      setSteps([...steps, currentStep]);
    }

    // Сбросить форму  
    setCurrentStep({ date: '', distance: 0 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCurrentStep((prev) => ({
      ...prev,
      [name]: name === 'inDistance' ? (value ? Number(value) : 0) : value,
    }));
  };

  const handleEdit = (index: number) => {
    setCurrentStep(steps[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setCurrentStep({ date: '', distance: 0 });
      setEditingIndex(null);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-block-in">
          <div className="in-date">
            <label className="in-label" htmlFor="inLabel">Дата (ДД.ММ.ГГ)</label>
            <input
              id="inLabel"
              name='inLabel'
              type="text"
              className="in-input-date"
              onChange={handleChange}
              value={currentStep.date}
            />
          </div>
          <div className="in-distance">
            <label className="in-distance" htmlFor="inDistance">Пройдено км</label>
            <input
              id="inDistance"
              name='inDistance'
              type="number" 
              className="in-input-distance"
              onChange={handleChange}
              value={currentStep.distance ? currentStep.distance.toString() : ''} 
            />
          </div>
          <button className="btn-in" type="submit">{editingIndex !== null ? 'Сохранить' : 'OK'}</button>
        </div>
      </form>

      <div className="form-result">
        <div className="result-title">
          <span className="span-date">Дата (ДД.ММ.ГГ)</span>
          <span className="span-distance">Пройдено км</span>
          <span className="span-actions">Действия</span>
        </div>
        <div className="result-out">
          {steps.map((step, index) => (
            <div className="result-element" key={index}>
              <span className="element-date">{step.date}</span>
              <span className="element-distance">{step.distance} км</span>
              <div className="element-edit">
                <button className="btn-edit" onClick={() => handleEdit(index)}>edit</button>
                <button className="btn-delite" onClick={() => handleDelete(index)}>X</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}  