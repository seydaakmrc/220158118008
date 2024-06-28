// Sabit portföy öğeleri verisi (örnek veri)
const portfolioItems = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "project1.jpg",
        link: "#"
    },
    {
        title: "Project 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "project2.jpg",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "project3.jpg",
        link: "#"
    }
];

// Portföy öğelerini sayfaya ekleyen fonksiyon
function renderPortfolioItems() {
    const portfolioItemsSection = document.getElementById('portfolio-items');

    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('portfolio-item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="btn">View Project</a>
        `;

        portfolioItemsSection.appendChild(itemElement);
    });
}

// Sayfa yüklendiğinde kapak bölümü animasyonları ve portföy öğelerini render et
document.addEventListener('DOMContentLoaded', () => {
    // Kapak bölümü animasyonları veya ek işlemler burada olabilir
    renderPortfolioItems();
});
