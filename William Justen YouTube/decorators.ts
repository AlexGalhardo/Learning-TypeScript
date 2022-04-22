/*
Types of decorators:
Class decorators
Property decorators
Method decorators
Parameter
Acessor decorators
*/

// BASIC CLASS DECORATOR

// Factory
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`); // // oi - class Foo {}
  };
}
@Logger("oi")
class Foo {}
// output 



// CLASS DECORATOR
function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}
@setApiVersion("1.0.0")
class API {}

console.log(new API()); // { version: "1.0.0" }


// PROPERTY DECORATOR
function minLength(length: number) {
  return (target: any, key: string) => {
    console.log(target, key) // Movie {} title
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: ${key} need at least ${length} characters`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // decorator here
  @minLength(10)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie("The");
console.log(movie.title) // The Batman


// Method decorator, runs everytime method is called
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target, key, descriptor) // Greeter {} greet { value: [Function: greet], writable: true, enumerable: false, configurable: true }
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${ms} milisegundos...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  @delay(3000)
  // debounce(3000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

const pessoa = new Greeter("Alex");
pessoa.greet(); // hello alex
