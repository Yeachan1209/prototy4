import { ReactNode, useEffect, useState } from "react";
import MobileHeader from "./mobilecomponent/mobileheader";
import MNavigationBar from "./mobilecomponent/mobileNavigationBar";

type LayoutProps = {
  children: ReactNode;
};

const MLayout = ({ children }: LayoutProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <>
      <MobileHeader />
      <MNavigationBar />
      <ul>{children}</ul>

      <style jsx>{`
        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default MLayout;
