import work from "webworkify-webpack";

const worker = work(require.resolve("./worker.js"));

export async function WW_Wasm() {
    return new Promise((resolve, reject) => {
        
        //console.time('zabbix-worker')
        worker.addEventListener("message", event => {
            //console.timeEnd('zabbix-worker')
            //console.log(event)

            resolve(event.data);
        });

        worker.addEventListener("error", e => {
            console.error(`Error: Line ${e.lineno} in ${e.filename}: ${e.message}`);
            reject(e);
        });


        //start the worker
        worker.postMessage({
            command: 'callWasm'
        });
    });
}

export async function socketReceive() {

    return new Promise((resolve, reject) => {
        WW_Wasm()
        .then(result => {

            //console.log(result) 
            //console.log(lastUpdate) 

            resolve(result);
        })
        .catch(err => {
            console.warn(err);
            reject(err);
        })
        .finally(() => {
            // Finaliza o Worker
            //worker.terminate();
            // libera memória
            //worker = null;
            //console.log('finally');
        });
    });
}