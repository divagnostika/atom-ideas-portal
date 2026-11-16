import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const archive=Buffer.from(readFileSync(new URL('../site-bundle.b64',import.meta.url),'utf8').trim(),'base64');
const result=spawnSync('tar',['-xz','-C',new URL('../',import.meta.url).pathname],{input:archive,stdio:['pipe','inherit','inherit']});
if(result.status!==0)throw new Error('Could not unpack portal source bundle');
console.log('Portal source bundle extracted');
