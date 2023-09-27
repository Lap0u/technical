class ClassicSingleton {
  static instance = new this();

  log () { console.log('logger') };
  getInstance () { return this.instance };
}

const instance = ClassicSingleton.instance.getInstance()
const instance2 = ClassicSingleton.instance.getInstance()
console.log(instance === instance2)
ClassicSingleton.instance.log()
ClassicSingleton.instance.log()