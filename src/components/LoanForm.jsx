// src/components/LoanForm.jsx

import React, { useState } from 'react'

const LoanForm = () => {
  const [loanData, setLoanData] = useState({
    id: '',
    prestatario: '',
    monto: '',
    plazo: '',
    tiempoSolicitud: '',
    tiempoLimite: '',
    aprobado: false,
    reembolsado: false,
    liquidado: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del préstamo al servidor o realizar otras acciones.
    console.log('Datos del préstamo:', loanData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Identificador único"
        value={loanData.id}
        onChange={handleInputChange}
      />
      {/* Agrega los demás campos aquí */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoanForm;
