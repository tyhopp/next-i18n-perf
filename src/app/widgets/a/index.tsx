"use client"

import { getLocale } from '../../utils/locales'

export default async function WidgetA() {
  const locale = await getLocale('en')

  return (
    <div>
      <h1>{locale['widgets.a.title']}</h1>
      <p>{locale['widgets.a.description']}</p>
    </div>
  )
}