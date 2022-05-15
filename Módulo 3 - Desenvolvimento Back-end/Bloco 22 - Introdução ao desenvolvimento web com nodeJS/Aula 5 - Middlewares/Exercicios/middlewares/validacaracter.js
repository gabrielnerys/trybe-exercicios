module.exports = (req, res, next) => {
  const { productName } = req.body;
  const MIN_CHAR = 4;
  if(productName.length > MIN_CHAR) {
    return next();
  } if (!productName) {
    res.status(400).json({ message: 'O campo productName é obrigatório'});
  } else {
    res.status(400).json({ message: 'O campo productName deve ter pelo menos 4 caracteres'});
  }
}