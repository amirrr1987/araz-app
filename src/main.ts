import { mount } from 'araz'
import { AppComponent } from './app/app.component'

import 'virtual:uno.css'
import "@unocss/reset/tailwind.css";


mount({
  $node: AppComponent(),
  $target: document.querySelector<HTMLDivElement>("#app")!,
})