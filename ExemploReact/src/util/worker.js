import * as workerFunctions from './workerFunctions';


export default function worker (self) {
  
  self.addEventListener('message', (event) => {
      
    switch (event.data.command) {

      case 'callWasm': {
        workerFunctions.wasmFunction(self);
        //self.close();
        break;
      }
      default: {
        break;
      }
    }
  });
};