components:自定义组件和组件实现
containers：与redux结合，将组件进行包装，接收store，并将store传到子组件中，当store发生变化时，更新store；所以子组件具有store的dispatch方法
module：数据源
redux:数据解构，用于数据交互
state：是redux里面的数据源，当数据发送变化后，会通过state在页面上加载显示出来
props：只读，只是用来显示（react）当中的属性，其中this.props.children 属性比较特殊，用来装载react组件，在单页面路由中用的比较广泛
componentWillReceiveProps：当props值发生改变时，会调用触发此方法，从而跟新store，并传递到相应的组件中，在组件交互之中用的比较广泛


React:http://www.ruanyifeng.com/blog/2015/03/react.html 有关于react的基础教学
Redux:http://www.redux.org.cn/docs/api/index.html 相关文档在此可以找到相应的资料

Redux主要有三个内容 action  reducer  store
其中action用来存储和调用时的常量或发送请求时候返回的promise
reducer用于接收action返回来的值，然后返回一个store，到react当中，react在接收这个store，在页面上显示
