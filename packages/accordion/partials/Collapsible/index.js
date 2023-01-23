import React, { useRef, useEffect } from 'react'
import s from './style.module.css'

function Collapsible({ isCollapsed, children }) {
  const parentElem = useRef(null)

  useEffect(() => {

  })
}

function cleanupTransition(elem) {
  if (!elem || !(elem instanceof Element)) return
  const computedStyle = getComputedStyle(elem)
  const innerElem = elem.firstChild
  const innerElemStyle = getComputedStyle(innerElem)
  const isCollapsed = computedStyle.height === '0px'
  if (isCollapsed) {
    innerElem.style.display = 'none'
    //  Transition delay modifications allow expected difference in collapse and expanding animation sequence
    const heightDrtn = parseFloat(computedStyle['transition-duration'])
    const opacityDrtn = parseFloat(innerElemStyle['transition-duration'])
    if (heightDrtn && opacityDrtn) {
      innerElem.style.transitionDelay = `${heightDrtn - opacityDrtn}s`
    }
  } else {
    elem.style.height = 'auto'
    innerElem.style.transitionDelay = '0s'
  }
}

export default Collapsible