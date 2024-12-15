// JavaScript Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

// Example: Attach to a button
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Assuming data.json is fetched or imported as `data` object
const data = {
    // JSON data here (truncated for brevity)
    "games": {
        "gen1": [
            {
                "title": "Red",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Blue",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Yellow",
                "status": "counterfeit",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen2": [
            {
                "title": "Gold",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Silver",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Crystal",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen3": [
            {
                "title": "Ruby",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Sapphire",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Emerald",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "FireRed",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "LeafGreen",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen4": [
            {
                "title": "Diamond",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Pearl",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Platinum",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "HeartGold",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "SoulSilver",
                "status": "counterfeit",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen5": [
            {
                "title": "Black",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "White",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Black 2",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "White 2",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen6": [
            {
                "title": "X",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Y",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Omega Ruby",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Alpha Sapphire",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen7": [
            {
                "title": "Sun",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Moon",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Ultra Sun",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Ultra Moon",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Let's Go Pikachu",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Let's Go Eevee",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen8": [
            {
                "title": "Sword",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Shield",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Brilliant Diamond",
                "status": "owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Shining Pearl",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Legends Arceus",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ],
        "gen9": [
            {
                "title": "Scarlet",
                "status": "digital-copy",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            },
            {
                "title": "Violet",
                "status": "not-owned",
                "imgSrc": "https://pbs.twimg.com/profile_images/1845711060428361754/3UiRtJJs_400x400.jpg"
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const fillContainer = document.querySelector(".fill");

    // Clear the fill container if needed
    fillContainer.innerHTML = "";

    // Iterate over each generation in the data
    Object.keys(data.games).forEach((genKey) => {
        const genGames = data.games[genKey];

        // Create a header for the generation
        const genHeader = document.createElement("h3");
        genHeader.textContent = genKey.replace("gen", "Gen ") + ":";

        // Create a container for the generation's games
        const genContainer = document.createElement("div");
        genContainer.classList.add("pokemon-games");

        // Iterate over each game in the generation
        genGames.forEach((game) => {
            const gameDiv = document.createElement("div");
            gameDiv.classList.add("pokemon-game", game.status);

            const gameImg = document.createElement("img");
            gameImg.src = game.imgSrc;
            gameImg.alt = `Pokemon ${game.title}`;

            const gameTitle = document.createElement("h2");
            gameTitle.textContent = `Pokemon ${game.title}`;

            // Append elements to the game div
            gameDiv.appendChild(gameImg);
            gameDiv.appendChild(gameTitle);

            // Append the game div to the generation container
            genContainer.appendChild(gameDiv);
        });

        // Append the generation header and container to the fill container
        fillContainer.appendChild(genHeader);
        fillContainer.appendChild(genContainer);
    });
});