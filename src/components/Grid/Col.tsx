import React, { ReactNode, ReactElement } from 'react'

function Col({ children }: { children: ReactNode }): ReactElement {
  return <div>{children}</div>
}

export default Col
