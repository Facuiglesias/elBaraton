function Categories() {
  return (
    <div className="navbar bg-base-100 justify-center">
      <ul className="menu menu-horizontal p-0 border-y">
        <li tabIndex={0}>
          <a className="mx-8">Parent</a>
          <ul className="p-4 border bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="mx-8">Parent</a>
          <ul className="p-4 border bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a className="mx-8">Parent</a>
          <ul className="p-4 border bg-base-100">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export { Categories };
