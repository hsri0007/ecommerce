export const addItemToCart = (cardItems, addCardItem) => {
  const existingCartItem = cardItems.find((cardItem) =>
    cardItem.id === addCardItem.id
  );

  if (existingCartItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === addCardItem.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...addCardItem, quantity: 1 }];
};

export const RemoveItemToCart = (cardItems, removeCardItem) => {
  const existingCartItem = cardItems.find((cardItem) =>
    cardItem.id === removeCardItem.id
  );

  if (existingCartItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== removeCardItem.id);
  }

  return cardItems.map((cartItem) =>
    cartItem.id === removeCardItem.id
      ? {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      }
      : cartItem
  );
};
