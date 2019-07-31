define(['src/views/login', 'src/views/home/home', 'src/views/home/transformstr'], function (login, home, transformstr) {
	return [
		{
		    path: '/',
		    name: 'home',
		    component: home,			
		},
		{
		    path: '/login',
		    name: 'login',
		    component: login,
		 },
		{
		    path: '/home',
		    name: 'home',
		    component: home,
		    children: [
		    	{
		    		path: '/home/transformstr',
		    		name: 'transformstr',
		    		component: transformstr
		    	}
		    ]
		 } 		 
	]
})
