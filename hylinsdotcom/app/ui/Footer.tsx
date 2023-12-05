"use client";
interface FooterProps {
  preview?: boolean;
}

export default function Footer(props: FooterProps) {
  const { preview } = props;
  return (
    <>
      {preview ? (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <div className="link link-hover">About us</div>
            <div className="link link-hover">Contact</div>
            <div className="link link-hover">Jobs</div>
            <div className="link link-hover">Press kit</div>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">{/* Social stuff */}</div>
          </nav>
          <aside>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      ) : (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">{/* Social stuff */}</div>
          </nav>
          <aside>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      )}
    </>
  );
}
