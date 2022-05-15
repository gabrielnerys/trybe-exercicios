module.exports = (req, res, next) => {
  const { infos } = req.body;
  const date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/ 
  if (date.test(infos.saleDate)) {
    return next()
  } else if(!infos.saleDate){
    res.status(400).json({ message: 'O campo saleDate é obrigatório'});
  } else {
    res.status(400).json({ message: 'O campo saleDate não é uma data válida'});
  }
}
