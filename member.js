function skillsMember(req, res, next) {
  res.render('skills', {
    title: 'Skills',
    name: 'Alex',
    skills: skills
  });
})