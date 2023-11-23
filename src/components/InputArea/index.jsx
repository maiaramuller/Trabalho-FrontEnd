import { useState } from "react";
import { categories } from "../../data/categories";
import "./index.css";

export const InputArea = ({ onAdd }) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys = Object.keys(categories);

  const handleAddEvent = () => {
    let errors = [];
    if (
      dateField === "" ||
      categoryField === "" ||
      titleField === "" ||
      valueField === 0
    ) {
      errors.push("Um dos campos está vazio.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField.concat("T00:00")),
        title: titleField,
        value: valueField,
        category: categoryField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setTitleField("");
    setCategoryField("");
    setDateField("");
    setValueField(0);
  };

  return (
    <div className="form-container">
      <label className="inputLabel">
        <div className="inputTitle">Data</div>
        <input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Categoria</div>
        <select
          className="select"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => {
              return (
                <option key={index} value={key}>
                  {categories[key].title}{" "}
                </option>
              );
            })}
          </>
        </select>
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Título</div>
        <input
          className="input-text"
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </label>
      <label className="inputLabel">
        <div className="inputTitle">Valor</div>
        <input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </label>
      <label className="inputLabel">
        <div>&nbsp;</div>
        <button className="botao" onClick={handleAddEvent}>
          Adicionar
        </button>
      </label>
    </div>
  );
};
