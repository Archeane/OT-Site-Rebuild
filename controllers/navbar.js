/*abouts*/
exports.getGreeklife = (req, res) => {
  	res.render('pages/about/greeklife', {
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
	res.render('thetatau',{
		title:'Theta Tau','css':['about.css']
	})
}
