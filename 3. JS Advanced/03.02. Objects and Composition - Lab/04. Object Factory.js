function factory(library, orders) {
    return orders.map(order => {
      const product = Object.assign({}, order.template);
      order.parts.forEach(part => {
        product[part] = library[part];
      });
      return product;
    });
  }
  