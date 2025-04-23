const base = {
    get() {
        return {
            url : "http://localhost:8080/wenxuewang/",
            name: "wenxuewang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wenxuewang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "阅微文学网站"
        } 
    }
}
export default base
