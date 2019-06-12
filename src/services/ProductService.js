//import products2 from "../products.json";

export default class ProductService {
  

  static getProductsByFilter({
    name,
    category,
    manufacture,
    featured,
    products
    
  }) {
    let results = products;
    console.log('result' ,results);
    //console.log('products2', products2);
     
      if (products && name && name.length) {
        const searchText = name.toLowerCase();
        results = results.filter(p =>
          p.name.toLowerCase().includes(searchText)
        );
      }

      if (products && category) {
        results = results.filter(p => p.category === category);
      }

      if (products && manufacture) {
        results = results.filter(p => p.manufacture === manufacture);
      }

      if (products && featured) {
        results = results.filter(p => p.featured === featured);
      }
      console.log(results);

      return results;
    
  }

  static getManufactures({products}) {
    return [...new Set(products.map(p => p.manufacture))];
  }
}
