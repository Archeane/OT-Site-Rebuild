/*abouts*/
exports.getGreeklife = (req, res) => {
  	res.render('about/greeklife', {
    title: 'Greek Life', 'css': ['about.css']
  });
};

exports.getThetaTau = (req, res) =>{
	res.render('about/thetatau',{
		title:'Theta Tau','css':['about.css']
	})
}

exports.getZetaEpsilon = (req, res) =>{
	res.render('about/zetaepsilon',{
		title:'Zeta Epsilon Chapter','css':['about.css']
	})
}

exports.getChairs = (req, res) =>{
	res.render('about/chairs',{
		title:'Chairs Information','css':['about.css']
	})
}

/*events*/
exports.getBrotherhood = (req, res) =>{
	res.render('events/brotherhood',{
		title:'Brotherhood', 'css':['events.css']
	})
}
exports.getProfessional = (req, res) =>{
	res.render('events/professional',{
		title:'Professional', 'css':['events.css']
	})
}
exports.getService = (req, res) =>{
	res.render('events/service',{
		title:'Service', 'css':['events.css']
	})
}
exports.getAnnual = (req, res) =>{
	res.render('events/annual',{
		title:'Annual', 'css':['events.css']
	})
}

exports.getBrothers = (req, res) =>{
	res.render('brothers',{
		title:'Brothers', 'js':['brothers.js']
	})
}

 	
