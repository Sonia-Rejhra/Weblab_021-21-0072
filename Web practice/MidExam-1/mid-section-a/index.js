const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];

const container = document.getElementById("product-container");
const cartContainer = document.getElementById("cart");

const cart = [];

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = product.imageUrl;
  image.alt = product.name;
  image.classList.add("product-image");

  imageContainer.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");

  button.addEventListener("click", () => {
    addToCart(product);
    updateCartUI();
  });

  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  infoDiv.appendChild(button);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  container.appendChild(productDiv);
});

function addToCart(product) {
  const existItem = cart.find(item => item.name === product.name);
  if (existItem) {
    existItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

function removeCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  cartContainer.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item, index) => {
    const cartIDiv = document.createElement("div");
    cartIDiv.classList.add("cart-item");

    const itemN = document.createElement("p");
    itemN.textContent = item.name;

    const itemP= document.createElement("p");
    itemP.textContent = "$" + (item.price * item.quantity).toFixed(2);

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.value = item.quantity;
    quantityInput.addEventListener("change", (event) => {
      const newQuantity = parseInt(event.target.value);
      if (newQuantity < 1) {
        removeCart(index);
      } else {
        cart[index].quantity = newQuantity;
        updateCartUI();
      }
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeCart(index);
    });

    cartIDiv.appendChild(itemN);
    cartIDiv.appendChild(itemP);
    cartIDiv.appendChild(quantityInput);
    cartIDiv.appendChild(removeButton);

    cartContainer.appendChild(cartIDiv);

    totalPrice += item.price * item.quantity;
  });

  const totalP = document.createElement("p");
  totalP.textContent = "Total Price: $" + totalPrice.toFixed(2);
  cartContainer.appendChild(totalP);
}


