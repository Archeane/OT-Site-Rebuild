/*abouts*/
exports.getGreeklife = (req, res) => {
  	res.render('greeklife', {
    title: 'Greek Life', 'css': ['about.css']
  });
};

exports.getThetaTau = (req, res) =>{
	res.render('thetatau',{
		title:'Theta Tau','css':['about.css']
	})
}

exports.getZetaEpsilon = (req, res) =>{
	res.render('zetaepsilon',{
		title:'Zeta Epsilon Chapter','css':['about.css']
	})
}

/*events*/
exports.getBrotherhood = (req, res) =>{
	res.render('events/brotherhood',{
		title:'Brotherhood'
	})
}
exports.getProfessional = (req, res) =>{
	res.render('events/brotherhood',{
		title:'Brotherhood'
	})
}
exports.getService = (req, res) =>{
	res.render('events/brotherhood',{
		title:'Brotherhood'
	})
}
exports.getAnnual = (req, res) =>{
	res.render('events/brotherhood',{
		title:'Brotherhood'
	})
}

 	
