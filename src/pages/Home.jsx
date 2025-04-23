import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0'
    }}>
      <h1>Welcome to the Job Portal</h1>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div
          onClick={() => navigate('/admin/login')}
          style={{
            padding: '2rem', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            cursor: 'pointer', borderRadius: '1rem', textAlign: 'center'
          }}
        >
          <h2>Admin</h2>
          <p>Log in to manage jobs</p>
        </div>
        <div
          onClick={() => navigate('/student/login')}
          style={{
            padding: '2rem', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            cursor: 'pointer', borderRadius: '1rem', textAlign: 'center'
          }}
        >
          <h2>Student</h2>
          <p>Log in to apply for jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Home;