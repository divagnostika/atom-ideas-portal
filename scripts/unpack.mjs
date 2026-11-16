import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const root=new URL('../',import.meta.url);
const source=['1','2','3'].map(n=>readFileSync(new URL('bundles/source-part-'+n+'.txt',root),'utf8')).join('');
const archive=Buffer.from(source,'base64');
const result=spawnSync('tar',['-xz','-C',root.pathname],{input:archive,stdio:['pipe','inherit','inherit']});
if(result.status!==0)throw new Error('Could not unpack portal source bundle');
console.log('Portal source bundle extracted');
