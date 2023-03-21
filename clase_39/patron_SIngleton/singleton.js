let instance = null;

class SingletonClass {
  constructor() {
    this.value = Math.random(100);
  }

  //   creamos un Metodo statico
  static getInstance() {
    if (!instance) {
      instance = new SingletonClass();
    }
    // let instance;
    // instance = new SingletonClass();
    return instance;
  }
}

module.exports = SingletonClass;

// Una aplicacion podria ser en una DB cuando inicializo la coneccion a una DB - quiero que se instancie una unica vez
