import React, { ReactElement } from 'react'
import { CardItem } from '@/components/Card'

function CardList({ data }: { data: any[] }): ReactElement {
  return (
    <div>
      {data.map((item, index) => (
        <CardItem key={index} name={item.name} />
      ))}
    </div>
  )
}

export default CardList
