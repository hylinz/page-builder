"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const currentPath = usePathname();

  return (
<section className="min-h-full px-4 shadow-bs-custom-right bg-neutral text-primary">
      <div className="navbar text-primary justify-center ">
        <div className="navbar-center">
          <ul className="menu menu-vertical">
            <li>
              <Link href={"/hcms/admin"} className={currentPath === "/hcms/admin" ? "active" : ""}>
                Start
              </Link>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="">
                <li className="">
                    <Link
                      href={"/hcms/admin/pages"}
                      className={currentPath === "/hcms/admin/pages" ? "active" : ""}
                    >
                      View Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/hcms/admin/create-page"}
                      className={currentPath === "/hcms/admin/create-page" ? "active" : ""}
                    >
                      Create Page
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Media</summary>
                <ul className="">
                <li>
                    <Link
                      href={"/"}
                      className={currentPath === "/" ? "active" : ""}
                    >
                      View Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className={currentPath === "/" ? "active" : ""}
                    >
                      New Media
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/"} className={currentPath === "/" ? "active" : ""}>
                Styles
              </Link>
            </li>
            <li>
              <Link href={"/hcms/admin/settings"} className={currentPath === "/hcms/admin/settings" ? "active" : ""}>
                General Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
