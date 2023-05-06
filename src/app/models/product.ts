export class ProductInformation {
  ingredients: string | undefined;
  servingSize: string | undefined;
  cookingTime: string | undefined;
  description: string | undefined;
  additionalInformation: string | undefined;
}

export class Product {
  information = new ProductInformation();
}
