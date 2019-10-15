import React, { ReactNode, ReactElement } from 'react'

function Row({ children }: { children: ReactNode }): ReactElement {
  return <div>{children}</div>
}

export default Row
