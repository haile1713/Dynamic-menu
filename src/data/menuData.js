import specialSaladImg from "../assets/images/special salad.jpg";
import normalSaladImg from "../assets/images/normal salad.jpg";
import eggtoastImg from "../assets/images/egg toast.jpg";
import BaguetteImg from "../assets/images/Baguette.jpg";
import teaImg from "../assets/images/tea.jpg";
import redteaImg from "../assets/images/red tea.jpg";
import EspressoImg from "../assets/images/esspreso.jpg";
import coffeeImg from "../assets/images/coffee.jpg";
import cappucinoImg from "../assets/images/cappucino.jpg";

const menuData = [
	{
		name: "Special Salad",
		img: specialSaladImg,
		price: "900 Birr",
		category: "Salads 🥗",
		desc: "A delicious mix of fresh greens and house dressing.",
	},
	{
		name: "Normal Salad",
		img: normalSaladImg,
		price: "700 Birr",
		category: "Salads 🥗",
		desc: "A healthy combination of vegetables and spices.",
	},
	{
		name: "Egg on toast",
		img: eggtoastImg,
		price: "700 Birr",
		category: "Brunch 🥖",
		desc: "Toasted bread topped with a perfectly fried egg.",
	},
	{
		name: "Baguette",
		img: BaguetteImg,
		price: "900 Birr",
		category: "Brunch 🥖",
		desc: "Freshly baked French baguette served with butter.",
	},
	{
		name: "Tea",
		img: teaImg,
		price: "300 Birr",
		category: "Drinks ☕️",
		desc: "A refreshing cup of hot tea to calm your mind.",
	},
	{
		name: "Red tea",
		img: redteaImg,
		price: "400 Birr",
		category: "Drinks ☕️",
		desc: "Rich and flavorful red tea, perfect for any time of day.",
	},
	{
		name: "Espresso",
		img: EspressoImg,
		price: "5 Birr",
		category: "Drinks ☕️",
		desc: "Strong and bold espresso to kickstart your day.",
	},
	{
		name: "Coffee",
		img: coffeeImg,
		price: "3 Birr",
		category: "Drinks ☕️",
		desc: "Freshly brewed coffee with a perfect aroma.",
	},
	{
		name: "Cappuccino",
		img: cappucinoImg,
		price: "4 Birr",
		category: "Drinks ☕️",
		desc: "Creamy and frothy cappuccino for coffee lovers.",
	},
];

export default menuData;
