const hello = async (req, res) => {
  const name = process.env.NAME || 'World';
  return res.send(`Hello ${name}!`);
};

export { hello };
