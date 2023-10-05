
const Users = ({ title }) => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {title}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              {title} 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {title} 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {title} 3
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              {title} 4
            </a>
          </li>
          {/* <li>
            <a className="dropdown-item" href="#">
              User 5
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              User 6
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Users;
