import React from "react";
import "./CriarPerfil.css";

function CriarPerfil() {
  const sistemas = ["Sistema 1", "Sistema 2", "Sistema 3"];
  return (
    <div className="container">
      <div className="form-container">
        <h3 className="title">Adicionar Novo Usuário</h3>
        <form>
          <label htmlFor="nome" className="label">
            Nome:
          </label>
          <input type="text" id="nome" name="nome" className="input" />

          <label htmlFor="cargo" className="label">
            Cargo:
          </label>
          <input type="text" id="cargo" name="cargo" className="input" />

          <label htmlFor="sistema" className="label">
            Sistema Vinculado:
          </label>
          <select id="sistema" name="sistema" className="select">
            {sistemas.map((sistema, index) => (
              <option key={index} value={sistema}>
                {sistema}
              </option>
            ))}
          </select>

          <div className="button-container">
            <button type="submit" className="button">
              Adicionar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CriarPerfil;