import { ReactComponent as IconEditCard } from "../../assets/icons/icon-edit-card.svg";

export default function Header() {
  return (
    <header>
      <div className="px-3 py-2 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h2 className="d-flex align-items-center my-3 my-lg-3 me-lg-auto text-decoration-none">
              KINFOLK
            </h2>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="/" className="nav-link text-secondary">
                  <IconEditCard />
                </a>
              </li>
              <li>
                <a href="/" className="nav-link text-white">
                  <IconEditCard />
                </a>
              </li>
              <li>
                <a href="/" className="nav-link text-white">
                  <IconEditCard />
                </a>
              </li>
              <li>
                <a href="/" className="nav-link text-white">
                  <IconEditCard />
                </a>
              </li>
              <li>
                <a href="/" className="nav-link text-white">
                  <IconEditCard />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
