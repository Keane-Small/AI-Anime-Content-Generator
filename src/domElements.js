function getFormSettings() {
    return {
        gender: document.getElementById('gender').value,
        hairStyle: document.getElementById('hair-style').value,
        hairColor: document.getElementById('hair-color').value,
        eyeColor: document.getElementById('eye-color').value,
        personality: document.getElementById('personality').value,
        outfit: document.getElementById('outfit').value,
        superpower: document.getElementById('superpower').value,
        name: document.getElementById('character-name').value
    };
}

function buildImagePrompt(settings) {
    return `High-quality anime illustration of a ${settings.personality} ${settings.gender} character with ${settings.hairStyle} ${settings.hairColor} hair and ${settings.eyeColor} eyes, wearing ${settings.outfit}, with ${settings.superpower} powers, professional anime art style, clean lineart, vibrant colors, detailed shading, full body view, and a background that matches there superpower`;
}

function buildCharacterPrompt(settings) {
    return `Generate detailed anime character information based on these traits:
- Gender: ${settings.gender}
- Hair: ${settings.hairStyle} ${settings.hairColor}
- Eyes: ${settings.eyeColor}
- Personality: ${settings.personality}
- Outfit: ${settings.outfit}
- Superpower: ${settings.superpower}
- Name: ${settings.name || "generate random Japanese name"}

Please return a JSON response with: name, age, height, powerLevel, specialAbility, background, backstory`;
}

function updateCharacterDisplay(characterData) {
    // Update character image
    if (characterData.imageUrl) {
        const characterImage = document.getElementById('character-image');
        characterImage.innerHTML = `<img src="${characterData.imageUrl}" alt="Generated Character">`;
        characterImage.classList.add('has-image');
    }
    
    // Update character stats
    if (characterData.character) {
        const char = characterData.character;
        document.getElementById('stat-name').textContent = char.name || 'Unknown';
        document.getElementById('stat-age').textContent = char.age || 'Unknown';
        document.getElementById('stat-height').textContent = char.height || 'Unknown';
        document.getElementById('stat-power').textContent = char.powerLevel || 'Unknown';
        document.getElementById('stat-ability').textContent = char.specialAbility || 'Unknown';
        document.getElementById('stat-background').textContent = char.background || 'Unknown';
        
        // Show stats panel
        document.getElementById('character-stats').style.display = 'block';
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateCharacter,
        getFormSettings,
        callGenerationAPI,
        buildImagePrompt,
        buildCharacterPrompt
    };
}