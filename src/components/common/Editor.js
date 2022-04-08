import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import ImageResize from '@looop/quill-image-resize-module-react';
import 'quill/dist/quill.snow.css';

Quill.register('modules/imageResize', ImageResize);

function Editor({ onChange }) {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 작성하세요..',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],

          ['bold', 'italic', 'underline', 'strike', 'link'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link', 'image'],
        ],
        imageResize: { modules: ['Resize'] },
      },
    });
    // text-change event handler
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChange({ target: { value: quill.root.innerHTML } });
      }
    });
    quill.setText('');
  }, []);

  return <div ref={quillElement} />;
}

export default Editor;
