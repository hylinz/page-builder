"use client";
interface HeaderProps {
  preview?: boolean;
}
export default function Header(props: HeaderProps) {
  const { preview } = props;
  return (
    <>
      {preview ? (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Page Title</a>
          </div>
          <div className="flex-none text-center">
            <ul className="menu menu-horizontal px-1 flex items-center">
              <li className="text-center">
                SomeLink
              </li>
              <li>
                <details>
                  <summary>Menu</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li className="px-2">
                      link
                    </li>
                    <li>
                      link
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Hylins</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
