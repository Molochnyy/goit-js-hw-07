"use strict";

const allCategories = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems}`);
});