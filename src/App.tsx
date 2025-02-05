import { DemoCounter } from '../lib/DemoCounter';

function App() {
  return (
    <div
      style={{
        margin: '25vh auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        This is bare bones react UI for you to test out whatever your package
        does! 🚀
      </div>
      <DemoCounter initialCount={0} specialMessage="Hello, World!" />
    </div>
  );
}

export default App;
