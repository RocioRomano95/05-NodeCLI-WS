function crearCalculadora() {
  let resultado = 0;
  let calculadora = {
    valor: function () {
      return resultado;
    },
    sumar: function (n) {
      return (resultado += n);
    },
    restar: function (n) {
      return (resultado -= n);
    },
    reset: function () {
      return (resultado = 0);
    },
  };

  return calculadora;
}
