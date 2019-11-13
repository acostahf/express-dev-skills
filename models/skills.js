const skills = [
    {skill: 'coding', done: true},
    {skill: 'flipping', done: true},
    {skill: 'trading', done: false}
]
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    return skills[id];
  }

  function getAll() {
    return skills;
  }