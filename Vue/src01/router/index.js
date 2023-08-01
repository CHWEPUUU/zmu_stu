// 该文件专门用于创建整个应用的路由器
//npm i vue-router@3
import VueRouter from 'vue-router'
//引入组件
import StudentList from '../pages/StudentList'
import CourseList from '../pages/CourseList'
import StudentInfo from '../pages/StudentInfo'
import Welcome from '../pages/Welcome'
import Login from '../components/Login'
import CourseInfo from '../pages/CourseInfo'


//创建并暴露一个路由器
const router = new VueRouter({
	//没有#号
	mode:'history',
	routes:[
		{
			//先进入登录页
			path:'/',
			component:Login
		},
		{
			//欢迎页 主容器
			path:'/welcome',
			component:Welcome,
			//包含副容器
			children:[
				{
				path:'/student_list',
				component:StudentList,
				},
				//多级路由用name指定
				{
				path:'/student_info',
				component:StudentInfo
				},			
				{
				path:'/course_list',
				component:CourseList
				},
				{path:'/course_info',
				component:CourseInfo
				}		
			]
		},
				
	]
})

//全局路由守卫
router.beforeEach((to,from,next) =>{
	//默认进入登录页
	if(to.path === '/')
		next()
	//判断是否登录
	else{
		//如果登录 放行
		if(sessionStorage.getItem('state'))
			next()
		//否则进入登录页
		else
			next("/")	
	}	
})
export default router

