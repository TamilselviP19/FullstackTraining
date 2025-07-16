function Nav() {
  return (
    <>
      <div className="container-fluid head">
        <div>
          <h1>My Cards</h1>
        </div>
        <div>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <a href="/" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/About" style={{ textDecoration: "none" }}>
                About
              </a>
            </li>
            <li>
              <a href="/Contact" style={{ textDecoration: "none" }}>
                Conatct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;
