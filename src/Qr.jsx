import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function Qr() {
    
  const [value, setValue] = useState();
  const [back, setBack] = useState('#FFFFFF');
  const [fore, setFore] = useState('#000000');
  const [size, setSize] = useState(256);
  const qrRef = useRef();

  // Function to handle the download action
  const handleDownload = () => {
    domtoimage.toBlob(qrRef.current).then(function (blob) {
      saveAs(blob, 'qr-code.png');
    });
  };

  return (
    <div className="App">
      <center>
      <h1>Qr Code Generator</h1><hr></hr>
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setBack(e.target.value)}
          placeholder="Background color"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setFore(e.target.value)}
          placeholder="Foreground color"
        />
        <br />
        <br />
        <br />
        {value && (
          <>
            <div ref={qrRef}>
              <QRCode
                title="Qr Code"
                value={value}
                bgColor={back}
                fgColor={fore}
                size={size === '' ? 0 : size}
              />
            </div>
            <br />
            <button onClick={handleDownload}>Download QR Code</button>
          </>
        )}
      </center>
    </div>
  );
}

export default Qr;
