import React, { useRef, useEffect, useState } from 'react'; // lazy,
import { Divider, Button } from 'antd';
import { loadMicroApp } from 'qiankun';
import Editor from './pages/Editor';

import 'antd/dist/antd.min.css';
import './App.css';

export default function App() {
  const appInstanceRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    appInstanceRef.current = loadMicroApp(
      { name: 'vue', entry: '//localhost:7101', container: '#vue' },
      { sandbox: { experimentalStyleIsolation: true } },
    );
  }, []);

  return (
    <div className="app-main">
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        加载组件
      </Button>
      <Divider />
      {show && <Editor />}
      <div id="vue"></div>
    </div>
  );
}
