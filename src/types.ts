

export type MenuItemProps = {
  name: string;
  amt: number;
  description: string;
  toppings: ToppingProp[];
  image: string;
};

export type ShopProps = {
  shop_name: string;
  shop_splash_img: string;
  shop_description: string;
  selected: SelectedType;
  cart: SelectedType;
  menuItems: MenuItemProps[];
};

export type SelectedType = {
  price: number;
  toppings: ToppingProp[];
  name: string;
};

export type ToppingProp = {
  name: string;
  amt: number;
};

export type Cart = {
  selected?: SelectedType;
  cart?: SelectedType;

};