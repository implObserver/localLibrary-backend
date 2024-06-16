import util from 'util';
import 'dotenv/config'
import { exec } from 'child_process';

export const addIPtoWhitelist = () => {
    console.log('WGGGGGGAFGA')
    let command = `curl -X POST https://cloud.mongodb.com/api/atlas/v1.0/projects/${process.env.PROJECT_ID}/apiKeys/${process.env.MONGO_KEY}/whitelist   -H 'Content-Type: application/json'   -d '{"comment":"My IP","cidrBlock":"80.91.23.10/32"}'`

    let child = exec(command, function (error, stdout, stderr) {

        console.log('stdout: ' + stdout);


        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
}
