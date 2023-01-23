import React, { useState } from 'react'

import classnames from 'classnames'
import Collapsible from '../Collapsible'
import s from './style.module.css'

function AccordionItem({ heading, children, isCollasped, toggleCollapsed }) {
  return (
    <div className={s.accordionItem}>
      <button>

      </button>
      <Collapsible>
        <div>{children}</div>
      </Collapsible>
    </div>
  )
}