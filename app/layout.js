// app/layout.js
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

export const metadata = {
  title: 'Shubukan Exam',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        overflowX: "hidden",
        maxWidth: "100vw",
        margin: "0px",
        boxSizing: "border-box",
      }}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b5cff" />
      </head>
      <body
        className={`antialiased`}
        style={{
          maxWidth: "100vw",
          width: "100%",
          margin: "0px",
          boxSizing: "border-box",
        }}
      >
        <RegisterSW />
        <div
          className="App"
          id="App"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowX: "hidden",
          }}
        >
          <div
            className="webBody"
            style={{
              position: "relative",
              zIndex: 2,
              height: "fit-content",
              minHeight: "calc(100vh - 610px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
