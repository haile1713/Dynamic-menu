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
		img: specialSaladImg, // Use the imported image
		price: "900 Birr",
		category: "Salads 🥗",
		desc: "A delicious mix of fresh greens and house dressing.",
	},
	{
		name: "Normal Salad",
		img: normalSaladImg, // Use the imported image
		price: "700 Birr",
		category: "Salads 🥗",
		desc: "A healthy combination of vegetables and spices.",
	},
	{
		name: "Egg on toast",
		img: eggtoastImg, // Converted to direct download
		price: "700 Birr",
		category: "Brunch 🥖",
	},
	{
		name: "Baguette",
		img: BaguetteImg, // Converted to direct download
		price: "900 Birr",
		category: "Brunch 🥖",
	},
	{
		name: "Tea",
		img: teaImg, // Converted to direct download
		price: "300 Birr",
		category: "Drinks ☕️",
	},
	{
		name: "Red tea",
		img: redteaImg, // Converted to direct download
		price: "400 Birr",
		category: "Drinks ☕️",
	},
	{
		name: "Espresso",
		img: EspressoImg, // Converted to direct download
		price: "5 Birr",
		category: "Drinks ☕️",
	},
	{
		name: "Coffee",
		img: coffeeImg, // Converted to direct download
		price: "3 Birr",
		category: "Drinks ☕️",
	},
	{
		name: "Cappuccino",
		img: cappucinoImg, // Converted to direct download
		price: "4 Birr",
		category: "Drinks ☕️",
	},
];

export default menuData;
