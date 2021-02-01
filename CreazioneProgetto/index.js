//creazione di una cartella con il nome del progetto
const execSync = require('child_process').execSync;
execSync(`cd ${percorso}`)

//creazione di un index.js
//echo some-text  > filename.txt
execSync(`echo ${sometext}  > ${filename.txt}`)

//lancio promt npm init
execSync(`npm init`,[
    "package name","version","description:"
])

//dopo di che mi specializzero sul progetto

//lancio di angular ng new {nomeProgetto}
execSync(`ng new ${nomeProgetto}`)