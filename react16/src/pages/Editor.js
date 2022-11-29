import React, { useState, Suspense } from 'react';
// import { useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
// import { promLanguageDefinition } from 'monaco-promql';
// import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
// import { parseSplv1ForError } from './parser';

import './Editor.css';

// interface IPromqlEditorProps {
//   value?: string;
//   onChange?: (value: string) => void;
// }

// type TMonacoType = typeof monacoEditor;

/**
 * promql编辑器
 */
export default function PromSqlEditor() {
  const [value, setValue] = useState('');
  // const monacoRef = useRef<TMonacoType>();

  // 初始化编辑器
  // const editorWillMount = (monaco: TMonacoType) => {
  //   const languageId = promLanguageDefinition.id;
  //   monaco.languages.register(promLanguageDefinition);
  //   monaco.languages.onLanguage(languageId, () => {
  //     promLanguageDefinition.loader().then((mod) => {
  //       monaco.languages.setMonarchTokensProvider(languageId, mod.language);
  //       monaco.languages.setLanguageConfiguration(languageId, mod.languageConfiguration);
  //       monaco.languages.registerCompletionItemProvider(languageId, mod.completionItemProvider);
  //     });
  //   });

  //   monacoRef.current = monaco;
  // };

  // const handleChange = (v: string) => {
  //   onChange?.(v);

  //   // 变化是检测是否有拼写错误，并在编辑器上展示提示
  //   if (v) {
  //     const errorMarks = parseSplv1ForError(v);
  //     const model = monacoRef.current?.editor.getModels()[0];
  //     if (model) {
  //       monacoRef.current?.editor.setModelMarkers(model, 'pandora', errorMarks);
  //     }
  //   }
  // };
  return (
    <Suspense fallback={null}>
      <MonacoEditor
        language="promql"
        theme="vs-dark"
        value={value}
        // editorWillMount={editorWillMount}
        onChange={setValue}
        options={{
          lineNumbers: 'on',
          lineNumbersMinChars: 1,
          lineDecorationsWidth: 0,
          automaticLayout: true,
          minimap: {
            enabled: false,
          },
        }}
        className="promqlEditor"
      />
    </Suspense>
  );
}
