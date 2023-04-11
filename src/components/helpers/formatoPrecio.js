const formatoPrecio = (moneda) => {
    return new Intl.NumberFormat('de-DE').format(moneda);
   }
   export default formatoPrecio;