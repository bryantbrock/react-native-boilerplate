import React from 'react'
import {SvgXml} from 'react-native-svg'

export default ({name, height = '24', width = '24', color = 'black'}) => (
  <SvgXml
    width={width}
    height={height}
    xml={icons[name].replace(/currentColor/g, color)} />
)

const icons = {
  'paypal': `
    <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="Layer_1" x="0px" y="0px" width="25.576353" height="30.177" viewBox="0 0 25.576353 30.177" enable-background="new 0 0 124 33" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="PayPal.svg">
      <metadata id="metadata3361"><rdf:RDF><cc:Work rdf:about="">
      <dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      <dc:title/></cc:Work></rdf:RDF></metadata><defs id="defs3359"/>
      <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1366" inkscape:window-height="706" id="namedview3357" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="7.3548387" inkscape:cx="30.356511" inkscape:cy="13.677" inkscape:window-x="1912" inkscape:window-y="304" inkscape:window-maximized="1" inkscape:current-layer="Layer_1"/><path d="m 7.2659888,29.154 0.523,-3.322 -1.165,-0.027 -5.563,0 3.866,-24.513 c 0.012,-0.074 0.051,-0.143 0.108,-0.192 0.057,-0.049 0.13,-0.076 0.206,-0.076 l 9.3800002,0 c 3.114,0 5.263,0.648 6.385,1.927 0.526,0.6 0.861,1.227 1.023,1.917 0.17,0.724 0.173,1.589 0.007,2.644 l -0.012,0.077 0,0.676 0.526,0.298 c 0.443,0.235 0.795,0.504 1.065,0.812 0.45,0.513 0.741,1.165 0.864,1.938 0.127,0.795 0.085,1.741 -0.123,2.812 -0.24,1.232 -0.628,2.305 -1.152,3.183 -0.482,0.809 -1.096,1.48 -1.825,2 -0.696,0.494 -1.523,0.869 -2.458,1.109 -0.906,0.236 -1.939,0.355 -3.072,0.355 l -0.73,0 c -0.522,0 -1.029,0.188 -1.427,0.525 -0.399,0.344 -0.663,0.814 -0.744,1.328 l -0.055,0.299 -0.924,5.855 -0.042,0.215 c -0.011,0.068 -0.03,0.102 -0.058,0.125 -0.025,0.021 -0.061,0.035 -0.096,0.035 l -4.5070002,0 z" id="path3349" inkscape:connector-curvature="0" style="fill:#253b80"/>
      <path d="m 23.047989,7.667 0,0 0,0 c -0.028,0.179 -0.06,0.362 -0.096,0.55 -1.237,6.351 -5.469,8.545 -10.874,8.545 l -2.7520002,0 c -0.661,0 -1.218,0.48 -1.321,1.132 l 0,0 0,0 -1.409,8.936 -0.399,2.533 c -0.067,0.428 0.263,0.814 0.695,0.814 l 4.8810002,0 c 0.578,0 1.069,-0.42 1.16,-0.99 l 0.048,-0.248 0.919,-5.832 0.059,-0.32 c 0.09,-0.572 0.582,-0.992 1.16,-0.992 l 0.73,0 c 4.729,0 8.431,-1.92 9.513,-7.476 0.452,-2.321 0.218,-4.259 -0.978,-5.622 -0.362,-0.411 -0.811,-0.752 -1.336,-1.03 z" id="path3351" inkscape:connector-curvature="0" style="fill:#179bd7"/><path d="m 21.753989,7.151 c -0.189,-0.055 -0.384,-0.105 -0.584,-0.15 -0.201,-0.044 -0.407,-0.083 -0.619,-0.117 -0.742,-0.12 -1.555,-0.177 -2.426,-0.177 l -7.352,0 c -0.181,0 -0.353,0.041 -0.507,0.115 C 9.9269888,6.985 9.6749888,7.306 9.6139888,7.699 l -1.564,9.906 -0.045,0.289 c 0.103,-0.652 0.66,-1.132 1.321,-1.132 l 2.7520002,0 c 5.405,0 9.637,-2.195 10.874,-8.545 0.037,-0.188 0.068,-0.371 0.096,-0.55 -0.313,-0.166 -0.652,-0.308 -1.017,-0.429 -0.09,-0.03 -0.183,-0.059 -0.277,-0.087 z" id="path3353" inkscape:connector-curvature="0" style="fill:#222d65"/><path d="m 9.6139888,7.699 c 0.061,-0.393 0.313,-0.714 0.6520002,-0.876 0.155,-0.074 0.326,-0.115 0.507,-0.115 l 7.352,0 c 0.871,0 1.684,0.057 2.426,0.177 0.212,0.034 0.418,0.073 0.619,0.117 0.2,0.045 0.395,0.095 0.584,0.15 0.094,0.028 0.187,0.057 0.278,0.086 0.365,0.121 0.704,0.264 1.017,0.429 0.368,-2.347 -0.003,-3.945 -1.272,-5.392 C 20.377989,0.682 17.852989,0 14.621989,0 L 5.2419888,0 c -0.66,0 -1.223,0.48 -1.325,1.133 L 0.00998882,25.898 c -0.077,0.49 0.301,0.932 0.795,0.932 l 5.79099998,0 1.454,-9.225 1.564,-9.906 z" id="path3355" inkscape:connector-curvature="0" style="fill:#253b80"/>
    </svg>
  `,
  'home': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  `,
  'cog': `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  `,
  'bookmark': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
  `,
  'qrcode': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    </svg>
  `,
  'template': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  `,
  'chart-bar': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  `,
  'currency-dollar': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `,
  'tag': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  `,
  'collection': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  `,
  'library': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  `,
  'credit-card': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  `,
  'cash': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  `,
  'briefcase': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  `,
  'office-building': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  `,
  'device-mobile': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  `,
  'search': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  `,
  'view-grid-add': `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
    </svg>
  `,
}