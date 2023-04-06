<script lang="ts">
  import brawlhalla from "$root/data/brawlhalla-data.json";
  const characters = brawlhalla.characters;
  let activeCharacters = characters;
  const weapons = brawlhalla.weapons
  let activeWeapons = new Array(weapons.length).fill(false);

  function ToggleActive(weapon: number) {
    activeWeapons[weapon] = !activeWeapons[weapon];
    activeCharacters = FilterCharacters();
  }

  function FilterCharacters() {
    let filteredCharacters = [];
    filteredCharacters = characters.filter(character => WeaponsFilter(character));
    return filteredCharacters;
  }

  function WeaponsFilter(character) {
    for (let i = 0; i < activeWeapons.length; i++) {
      if (activeWeapons[i]) {
        if (!WeaponFilter(character, weapons[i])) {
          return false;
        }
      }
    }
    return true;
  }

  function WeaponFilter(character, weapon) {
    if (character.weapons.includes(weapon)) {
      return true;
    }
    return false;
  }
</script>

<div>
  <div class="flex flex-row gap-3">
    {#each weapons as weapon, index}
      <button on:click={() => ToggleActive(index)} class={`capitalize rounded-md p-3 shadow-md    ${!activeWeapons[index] ? 'bg-fadedDarkGreen hover:bg-fadedGreen' : 'bg-purple hover:bg-darkPurple'}`}>{weapon}</button>
    {/each}
  </div>
  <div>
    {#each activeCharacters as character}
    <p>{character.name}</p>
    {/each}
  </div>
</div>
