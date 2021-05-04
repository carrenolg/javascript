export const a = 400;
export const b = 300;

export function saludar() {
  return "Hola!!, desde saludar()";
}

export function saludarDefault() {
  return "Hola!!, desde saludarDefault()";
}

// Solo puede haber un solo "export default" en un mismo archivo
export default class Hola {
  constructor() {
    console.log("Hola!!, desde la clase por default");
  }
}
