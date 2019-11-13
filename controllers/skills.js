var Skill = require('../models/skills');


module.exports = {
    index,
    show
};

function show(req, res) {
    console.log(req.params.id);
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
      skillsNum: parseInt(req.params.id) + 1
    });
  }
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }