const usuarioController = {
  lista: (req, res) => {
    /**
     * logica
     */
    res.render("usuarios/lista", { usarios: [], platos: [], tragos: [] });
  },
  usarioPorId: (req, res) => {
    /**
     * logica
     */
    res.render("usuarios/usuario", { id: req.params.id });
  },
};

module.exports = usuarioController;
