const globby = require('globby');
const path = require('path');
const fs = require('fs');
const getTemplates = async () => {
    const file = path.resolve(__dirname, 'generators');
    console.log(path.normalize(file))
    const paths = await globby(__dirname)
    console.log(__dirname, __filename)
    console.log(paths, file)
    fs.readFile(file, (err, data) => {
        console.log('', err, data)
    });
    return paths
}

getTemplates();