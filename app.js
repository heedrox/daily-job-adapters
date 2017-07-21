import HelloWorld from './app/helloWorld'

let c = new HelloWorld(process.argv.slice(2));
c.run();
