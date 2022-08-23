import React from 'react'

export default function Order(props) {
  return (
    <>
          <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
              </tr>
    </>
  )
}
