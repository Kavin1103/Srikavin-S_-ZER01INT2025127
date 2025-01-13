const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        width: "100%",
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <div
        className="navbar-logo"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/src/assets/image.png"
          alt="Logo"
          style={{
            height: "3rem",
            marginRight: "1rem",
          }}
        />
        <h1 style={{ color: "#00aaff", fontFamily: "Cursive" }}>
          Ready Player One
        </h1>
      </div>
      <ul
        className="nav-links"
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="https://www.google.com/search?q=ready+player+one+synopsis&sca_esv=579fa9cb7f57f8d8&biw=1280&bih=712&sxsrf=ADLYWIL4h1PxV0p54S-LsDcXnP-4JBXCag%3A1736757777142&ei=EdKEZ92RCKLvseMPv83V0AQ&oq=ready+player+one+syn&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHJlYWR5IHBsYXllciBvbmUgc3luKgIIADILEAAYgAQYkQIYigUyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFSIwNUPADWMoGcAF4AZABAJgBhAGgAYQDqgEDMC4zuAEByAEA-AEBmAIEoAKcA8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIKEC4YgAQYQxiKBcICBRAuGIAEwgIFEAAYgATCAgoQABiABBhDGIoFwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAZgDAIgGAZAGEroGBggBEAEYCZIHAzEuM6AH7xg&sclient=gws-wiz-serp"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Synopsis
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/search?sca_esv=579fa9cb7f57f8d8&sxsrf=ADLYWII4CGGVSpoB9UZHwOVKQot0v09bbQ:1736757774765&q=ready+player+one+characters&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JzEq8sk6FPCPzvp42tv1tXoay0ZGVNZCXxBOusZuiEu6Mc_EEv644gM4tqiRz8ZZWe44I6K-3aHwW4jbon1KbmIwdxx6sJoQa7WtLoG216Iau9AE0Y4-REkyUFzAlC3zY97kOqHqjpdn-T0Jigwoypg4LqVK4hqmQQ7vN2W0eBggwaCIrQ&sa=X&ved=2ahUKEwjC8ubxpvKKAxV-S2wGHWHFCO4Q0pQJegQIExAB&biw=1280&bih=712&dpr=2#wgvs=e"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Characters
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=cSp1dM2Vj48"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            Trailer
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
