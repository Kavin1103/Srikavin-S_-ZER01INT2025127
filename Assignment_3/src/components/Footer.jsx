const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        top: "10px",
        position: "sticky",
        bottom: 0,
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        alignItems: "center",
        opacity: "0.5",
      }}
    >
      <p>© {new Date().getFullYear()} Ready Player One</p>
    </div>
  );
};

export default Footer;
