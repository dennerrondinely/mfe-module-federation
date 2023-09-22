/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Detalhes do usuário</h1>
      <button type="button" onClick={() => navigate('/')}>
        Voltar para a home
      </button>
    </div>
  );
}

export default Details;
