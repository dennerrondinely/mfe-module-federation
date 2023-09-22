/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => navigate('/details')}>
        Detalhes do usuário
      </button>
    </div>
  );
}

export default Home;
