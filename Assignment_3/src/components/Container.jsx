const Container = () => {
  return (
    <div
      className="container"
      style={{
        margin: "auto",
        width: "100%",
        height: "auto",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#121212",
      }}
    >
      <div
        className="intro"
        style={{
          fontFamily: "Cursive, system-ui, Avenir, Helvetica, Arial, sans-seri",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#00aaff",
          fontWeight: "bold",
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to the OASIS!</h1>
      </div>
      <div
        className="para"
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          margin: "0",
          padding: "0",
          alignContent: "center",
        }}
      >
        <p
          className="para1"
          style={{
            fontSize: "1.2rem",
            color: "white",
            margin: "0",
            padding: "0",
            width: "80%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Welcome to the immersive world of Ready Player One, where the OASIS
          offers boundless adventures, epic quests, and limitless possibilities.
          Join Wade Watts as he embarks on a quest to uncover hidden secrets,
          solve puzzles, and win control of the ultimate virtual reality
          universe. Are you ready for the adventure of a lifetime?
        </p>
      </div>
      <div
        className="phcontent"
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
          fontFamily: "Cursive",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        <div
          className="image"
          style={{
            width: "50%",
            height: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "70px",
          }}
        >
          <img
            src="/src/assets/image copy.png"
            style={{
              width: "50%",
              height: "fit-content",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.8)",
              padding: "20px",
              margin: "20px",
              border: "1px solid #f0f0f0",
            }}
            alt="Ready Player One Poster"
          />
        </div>
        <div
          className="imgcont"
          style={{
            width: "50%",
            height: "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            marginRight: "40px",
          }}
        >
          <p>
            Ready Player One is a sci-fi masterpiece directed by Steven
            Spielberg. Set in 2045, the story follows Wade Watts as he navigates
            the virtual reality world of OASIS in search of an Easter egg that
            could change his life forever. With stunning visuals, thrilling
            adventures, and iconic pop culture references, it’s a cinematic
            journey you don’t want to miss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
