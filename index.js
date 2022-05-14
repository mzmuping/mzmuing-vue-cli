const globby = require('globby');
const getTemplates = async () => {

    const paths = await globby("generators/app/templates/**")
    console.log(paths)
    return []
}

getTemplates();