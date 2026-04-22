import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "../assets/logo.png";

const Qr = () => {
  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "gungun-chinese-corner-lift-qr.png";
    link.click();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
      }}
    >
      <div
        ref={qrRef}
        style={{
          background: "linear-gradient(135deg, #000, #1c1c1c)",
          padding: "28px",
          borderRadius: "20px",
          textAlign: "center",
          width: "320px",
          color: "#fff",
          boxShadow: "0 12px 35px rgba(0,0,0,0.6)",
        }}
      >
        {/* Hook Line */}
        <h2 style={{ marginBottom: "6px" }}>Hungry? 🍜</h2>
        <p style={{ fontSize: "14px", color: "#bbb" }}>
          Don’t go down. Order from here.
        </p>

        {/* QR */}
        <div
          style={{
            margin: "22px auto",
            padding: "14px",
            background: "#fff",
            borderRadius: "16px",
            width: "fit-content",
          }}
        >
          <QRCodeCanvas
            value="https://gunnu-chinesec407e4.netlify.app/"
            size={200}
            level="H"
            includeMargin
            imageSettings={{
              src: logo,
              height: 48,
              width: 48,
              excavate: true,
            }}
          />
        </div>

        {/* CTA */}
        <h3 style={{ marginBottom: "4px" }}>Scan & Order</h3>
        <p style={{ fontSize: "13px", color: "#aaa" }}>
          Gungun Chinese Corner
        </p>

        {/* Button (only for you) */}
        <button
          onClick={downloadQR}
          style={{
            marginTop: "14px",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "none",
            background: "#ffcc00",
            color: "#000",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Download Print QR
        </button>
      </div>
    </div>
  );
};

export default Qr;
