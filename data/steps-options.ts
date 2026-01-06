export const WindowTypeOptions = [
    { label: 'Fereastra simpla', img: '/images/windows-type/simple-window.png' },
    { label: 'Usa Fereastra', img: '/images/windows-type/door-window.png' },
    { label: 'Fereastra fixa', img: '/images/windows-type/fixed-window.png' },
    { label: 'Fereastra culisanta', img: '/images/windows-type/sliding-window.png' },
  ]
  
  export const WindowMaterialOptions = [
    { label: 'Aluminium', img: '/images/window-material/aluminium.png' },
    { label: 'PVC', img: '/images/window-material/pvc.png' },
    { label: 'Lemn', img: '/images/window-material/wood.png' },
  ]
  
  export const ColorMaterialOptions = [
    { label: 'Alb Ral', img: '/images/window-color/Blanc_Ral.svg', colorCode: '#FFFFFF' },
    { label: 'Gri Antracit Ral', img: '/images/window-color/Gris_Antracite.svg', colorCode: '#363D40' },
    { label: 'Gri Tip Ral', img: '/images/window-color/Gris_Type_Ral.svg', colorCode: '#505358' },
    { label: 'Gri Deschis Ral', img: '/images/window-color/Gris_Claire_Ral.svg', colorCode: '#8E969E' },
    { label: 'Negru Grafit Ral', img: '/images/window-color/Noir_Graphite.svg', colorCode: '#1C1C1C' },
  ]

  export const NumberOfPanels = [
    { label: '1 panou', img: '/images/window_panels/1_window.svg', compatibleTypes: ['Fereastra simpla'] },
    { label: '2 panouri', img: '/images/window_panels/2_windows.svg', compatibleTypes: ['Fereastra simpla', 'Fereastra culisanta'] },
    { label: '3 panouri', img: '/images/window_panels/3_windows.svg', compatibleTypes: ['Fereastra culisanta', 'Fereastra simpla'] },
  ]