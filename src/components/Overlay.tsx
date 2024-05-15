import React, { useRef } from 'react'
import { createPortal } from 'react-dom';

type Props = {
    children:JSX.Element;

}

const Overlay = (props: Props) => {
    const container = document.getElementById('overlay');

  return (
          createPortal(props.children, container!)

  )
}

export default Overlay