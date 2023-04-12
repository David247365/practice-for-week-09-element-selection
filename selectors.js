const select = () => {
	/* Write queries for each of the following */

	/* Section 1 */
	// 1. Get all seeded fruit elements
	// Your code here
	const seededFruit = document.getElementsByClassName("seed");
	console.log(seededFruit);

	// 2. Get all seedless fruit elements
	// Your code here
	const seedlessFruits = document.getElementsByClassName("seedless");
	console.log(seedlessFruits);

	// 3. Get first seedless fruit element
	// Your code here
	let firstSeedless = seedlessFruits[0];
	console.log(firstSeedless);

	/* Section 2 */
	// 4. Get inner span with text "you"
	// Your code here
	const span = document.getElementsByTagName("span");
	console.log(span /*[0].innerHTML*/);

	// 5. Get all children of element "wrapper"
	// Your code here
	let wrapper = document.getElementById("wrapper");
	console.log(wrapper);

	// 6. Get all odd number list items in the list
	// Your code here
	const odd = document.getElementsByClassName("odd");
	console.log(odd);

	// 7. Get all even number list items in the list
	// Your code here
	const even = document.querySelectorAll("ol :nth-child(even)");
	console.log(even);

	/* Section 3 */
	// 8. Get all tech companies without a class name
	// Your code here
	const noClass = document.querySelector("a:not([class])");
	console.log(noClass);

	// 9. Get "Amazon" list element
	// Your code here
	const shopping = document.querySelector("a.shopping");
	console.log(shopping);

	// 10. Get all unicorn list elements (not the image element)
	// Your code here
	const unicorn = document.querySelectorAll("li > img.unicorn");
	console.log(unicorn);
};

window.onload = select;
