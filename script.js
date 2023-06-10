// This would need to be replaced with your actual images and descriptions
let tarotDeck = [
    { image: 'ar00.jpg', description: 'The Fool: Represents new beginnings, improvisation, and believing in the universe.' },
    { image: 'ar01.jpg', description: 'The Magician: Represents the use of one’s power, spirituality, and emotion.' },
    { image: 'ar02.jpg', description: 'The High Priestess: Represents intuition, unconscious, and the divine feminine.' },
    { image: 'ar03.jpg', description: 'The Empress: Represents creativity, fertility, and abundance.' },
    { image: 'ar04.jpg', description: 'The Emperor: Represents structure, stability, and authority.' },
    { image: 'ar05.jpg', description: 'The Hierophant: Represents tradition, conformity, and morality.' },
    { image: 'ar06.jpg', description: 'The Lovers: Represents love, harmony, and relationships.' },
    { image: 'ar07.jpg', description: 'The Chariot: Represents determination, direction, and control.' },
    { image: 'ar08.jpg', description: 'Strength: Represents bravery, compassion, and focus.' },
    { image: 'ar09.jpg', description: 'The Hermit: Represents introspection, solitude, and guidance.' },
    { image: 'ar10.jpg', description: 'The Wheel of Fortune: Represents destiny, cycles, and sudden change.' },
    { image: 'ar11.jpg', description: 'Justice: Represents fairness, truth, and law.' },
    { image: 'ar12.jpg', description: 'The Hanged Man: Represents surrender, new perspective, and sacrifice.' },
    { image: 'ar13.jpg', description: 'Death: Represents transformation, change, and endings.' },
    { image: 'ar14.jpg', description: 'Temperance: Represents balance, moderation, and patience.' },
    { image: 'ar15.jpg', description: 'The Devil: Represents addiction, materialism, and playfulness.' },
    { image: 'ar16.jpg', description: 'The Tower: Represents upheaval, disaster, and sudden change.' },
    { image: 'ar17.jpg', description: 'The Star: Represents hope, faith, and rejuvenation.' },
    { image: 'ar18.jpg', description: 'The Moon: Represents unconscious, illusions, and intuition.' },
    { image: 'ar19.jpg', description: 'The Sun: Represents joy, success, and celebration.' },
    { image: 'ar20.jpg', description: 'Judgement: Represents rebirth, inner calling, and absolution.' },
    { image: 'ar21.jpg', description: 'The World: Represents fulfillment, harmony, and completion.' },
    { image: 'cu02.jpg', description: 'Two of Cups: Represents connection, love, and partnership.' },
    { image: 'cu03.jpg', description: 'Three of Cups: Represents friendship, community, and joy.' },
    { image: 'cu04.jpg', description: 'Four of Cups: Represents apathy, contemplation, and disconnectedness.' },
    { image: 'cu05.jpg', description: 'Five of Cups: Represents loss, grief, and disappointment.' },
    { image: 'cu06.jpg', description: 'Six of Cups: Represents nostalgia, joy, and innocence.' },
    { image: 'cu07.jpg', description: 'Seven of Cups: Represents choices, fantasy, and illusion.' },
    { image: 'cu08.jpg', description: 'Eight of Cups: Represents disillusionment, leaving behind, and seeking truth.' },
    { image: 'cu09.jpg', description: 'Nine of Cups: Represents contentment, satisfaction, and wish fulfillment.' },
    { image: 'cu02.jpg', description: 'Ten of Cups: Represents harmony, marriage, and happiness.' },
    { image: 'cu03.jpg', description: 'Ace of Cups: Represents new feelings, spirituality, and intuition.' },
    { image: 'cu04.jpg', description: 'King of Cups: Represents balance, compassion, and emotional strength.' },
    { image: 'cu05.jpg', description: 'Knight of Cups: Represents creativity, romance, and charm.' },
    { image: 'cu06.jpg', description: 'Page of Cups: Represents imaginative, emotional openness, and curiosity.' },
    { image: 'cu07.jpg', description: 'Queen of Cups: Represents emotional stability, intuition, and compassion.' }
    // ...rest of the cards
];

let cardCount = 0; // keep track of the number of drawn cards

window.onload = function() {
    document.getElementById('drawButton').onclick = drawCard;
}

// Hash function to generate integer from string
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash); // Ensure it is positive
}

function drawCard() {
    let userInput = document.getElementById('userInput');
    let url = userInput.value;

    if (url === '' || !url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please input a valid URL starting with "http".');
        return;
    }

    if (cardCount >= 2) {
        let breachIndex = hashCode(url) % breachReasons.length;
        document.getElementById('fortuneMessage').textContent = "The reason for this website getting breached: " + breachReasons[breachIndex];
    }

    let hashIndex = hashCode(url) % tarotDeck.length;
    let card = tarotDeck[hashIndex];

    // Remove the card from the deck
    tarotDeck.splice(hashIndex, 1);

    let cardElement = document.getElementById('card' + (cardCount + 1));
    document.getElementById('cardImage' + (cardCount + 1)).src = "images/" + card.image;
    document.getElementById('cardDescription' + (cardCount + 1)).textContent = card.description;

    // Make the card visible
    cardElement.style.visibility = "visible";

    // Disable userInput and increment cardCount after a successful draw
    userInput.disabled = true;
    cardCount++;
}

