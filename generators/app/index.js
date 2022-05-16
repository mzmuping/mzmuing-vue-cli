const Generator = require('yeoman-generator');
const globby = require('globby');
module.exports = class extends Generator {
    prompting() {
        //Yeoman 在询问用户环节会自动调用此方法
        //在此方法中可以调用父类this.prompt()方法发出对用户的命令行行文
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname//appname 目录名
            }
        ]).then(answers => {
            this.answers = answers;
        })
    }
    async writing() {
        //生成目录的时候会自动调用该方法
        // this.fs.write(this.destinationPath('temp.text'), Math.random().toString())

        //  

        // //通过模板方式吸入文件到目标目录
        // //模板文件路径
        // const tmpl = this.templatePath('bar.html')
        // //输出目标路径
        // const output = this.destinationPath('bar.html')
        // //模板数据上下文
        // const context = this.answers;
        // //把模板写入到目标目录
        // this.fs.copyTpl(tmpl, output, context);
        // await getTemplates();
        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }

}


const getTemplates = async () => {
    const path = __dirname + "/templates/**"
    const paths = await globby(path)
    console.log(paths, path)
    return paths
}