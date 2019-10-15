import React, { ReactElement } from "react";

function CardItem({ name }: { name: string }): ReactElement {
  return (
    <div>
      { name }
    </div>
  )
}

export default CardItem
