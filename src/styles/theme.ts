export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: '"Space Grotesk", serif',
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#712de0',
    secondary: '#eb2f93',
    mainBg: '#2B2C33',
    white: '#F5F5FD',
    black: '#282A36',
    lightGray: '#EAEAEA',
    gray: '#999591',
    darkGray: '#44475A',
    lightOrange: '#FFB86C',
    orange: '#FF9000',
    purple: '#BC93F9',
    red: '#FF5555',
    green: '#8AB924',
    confirmation: '#35BDAC',
    menu: '#545560'
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    regular: '2.0rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    xxxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
