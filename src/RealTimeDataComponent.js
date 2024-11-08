// RealTimeDataComponent.js
import React, { useEffect, useState } from 'react';

const RealTimeDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      setData(event.data);
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Real-Time Data</h1>
      {data ? <p>Data: {data}</p> : <p>Waiting for data...</p>}
    </div>
  );
};

export default RealTimeDataComponent;
