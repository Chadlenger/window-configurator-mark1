const SimpleWindow1PanelOptions = [
  { label: 'Option 1', img: '/images/opening-types-simple-window-1-panel/Option_144.svg' },
  { label: 'Option 2', img: '/images/opening-types-simple-window-1-panel/Option_145.svg' },
  { label: 'Option 3', img: '/images/opening-types-simple-window-1-panel/Option_146.svg' },
  { label: 'Option 4', img: '/images/opening-types-simple-window-1-panel/Option_147.svg' },
]

const SimpleWindow2PanelsOptions = [
  { label: 'Option 1', img: '/images/opening-types-simple-window-2-panels/Option_150.svg' },
  { label: 'Option 2', img: '/images/opening-types-simple-window-2-panels/Option_151.svg' },
  { label: 'Option 3', img: '/images/opening-types-simple-window-2-panels/Option_152.svg' },
  { label: 'Option 4', img: '/images/opening-types-simple-window-2-panels/Option_153.svg' },
  { label: 'Option 5', img: '/images/opening-types-simple-window-2-panels/Option_154.svg' },
]

const SimpleWindow3PanelsOptions = [
  { label: 'Option 1', img: '/images/opening-types-simple-window-3-panels/Option_155.svg' },
  { label: 'Option 2', img: '/images/opening-types-simple-window-3-panels/Option_156.svg' },
  { label: 'Option 3', img: '/images/opening-types-simple-window-3-panels/Option_157.svg' },
  { label: 'Option 4', img: '/images/opening-types-simple-window-3-panels/Option_158.svg' },
  { label: 'Option 5', img: '/images/opening-types-simple-window-3-panels/Option_159.svg' },
  { label: 'Option 6', img: '/images/opening-types-simple-window-3-panels/Option_160.svg' },
  { label: 'Option 7', img: '/images/opening-types-simple-window-3-panels/Option_161.svg' },
  { label: 'Option 8', img: '/images/opening-types-simple-window-3-panels/Option_162.svg' },
  { label: 'Option 9', img: '/images/opening-types-simple-window-3-panels/Option_163.svg' },
  { label: 'Option 10', img: '/images/opening-types-simple-window-3-panels/Option_164.svg' },
  { label: 'Option 11', img: '/images/opening-types-simple-window-3-panels/Option_165.svg' },
  { label: 'Option 12', img: '/images/opening-types-simple-window-3-panels/Option_166.svg' },
]

const SlidingWindow2PanelsOptions = [
  { label: 'Option 1', img: '/images/opening-types-sliding-window-2-panels/Option_167.svg' },
  { label: 'Option 2', img: '/images/opening-types-sliding-window-2-panels/Option_168.svg' },
  { label: 'Option 3', img: '/images/opening-types-sliding-window-2-panels/Option_169.svg' },
  { label: 'Option 4', img: '/images/opening-types-sliding-window-2-panels/Option_170.svg' },
]

const SlidingWindow3PanelsOptions = [
  { label: 'Option 1', img: '/images/opening-types-sliding-window-3-panels/Option_171.svg' },
  { label: 'Option 2', img: '/images/opening-types-sliding-window-3-panels/Option_172.svg' },
  { label: 'Option 3', img: '/images/opening-types-sliding-window-3-panels/Option_173.svg' },
  { label: 'Option 4', img: '/images/opening-types-sliding-window-3-panels/Option_174.svg' },
  { label: 'Option 5', img: '/images/opening-types-sliding-window-3-panels/Option_175.svg' },
]

export type OpeningOption = {
  label: string
  img: string
}

export function getOpeningTypeOptions(windowType?: string, numberOfPanels?: string): OpeningOption[] {
  if (windowType === 'Fereastra simpla' && numberOfPanels === '1 panou') {return SimpleWindow1PanelOptions}
  if (windowType === 'Fereastra simpla' && numberOfPanels === '2 panouri') {return SimpleWindow2PanelsOptions}
  if (windowType === 'Fereastra simpla' && numberOfPanels === '3 panouri') {return SimpleWindow3PanelsOptions}
  if (windowType === 'Fereastra culisanta' && numberOfPanels === '2 panouri') {return SlidingWindow2PanelsOptions}
  if (windowType === 'Fereastra culisanta' && numberOfPanels === '3 panouri') {return SlidingWindow3PanelsOptions}
  return []
}