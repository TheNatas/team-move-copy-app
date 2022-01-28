import { NextPage } from "next";
import { PropsWithChildren } from "react";

const Layout : NextPage = ({children} : PropsWithChildren<{}>) => {
  return(
    <div style={{padding: '1rem'}}>
      {children}
    </div>
  )
}

export default Layout;