<script lang="ts">
  import StatSlider from "$components/tools/brawlhalla/StatSlider.svelte";
  import brawlhalla from "$root/data/brawlhalla-data.json";
  const characters = brawlhalla.characters;
  let activeCharacters = characters;
  const weapons = brawlhalla.weapons;
  let activeWeapons = new Array(weapons.length).fill(false);
  const stats = brawlhalla.stats;
  let currentStats = new Array(stats.length).fill(0);
  let statStances = false;

  function ToggleActive(weapon: number) {
    activeWeapons[weapon] = !activeWeapons[weapon];
    activeCharacters = FilterCharacters();
  }

  function FilterCharacters() {
    let filteredCharacters = [];
    filteredCharacters = characters.filter((character) =>
      WeaponsFilter(character)
    );
    filteredCharacters = filteredCharacters.filter((character) =>
      StatsFilter(character)
    );
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

  function UpdateStat(stat: number, value: string) {
    currentStats[stat] = Number.parseInt(value);
    activeCharacters = FilterCharacters();
  }

  function StatsFilter(character) {
    for (let i = 0; i < currentStats.length; i++) {
      if (currentStats[i] != 0) {
        if (!StatFilter(character, currentStats[i], i)) {
          return false;
        }
      }
    }
    return true;
  }

  function StatFilter(character, stat, statPos) {
    const charStat = character.stats[statPos];
    if (
      character.stats[statPos] == stat ||
      (statStances && (charStat == stat + 1 || charStat == stat - 1))
    ) {
      return true;
    }
    return false;
  }

  function UpdateStatStances(e) {
    statStances = e.target.value;
    activeCharacters = FilterCharacters();
  }
</script>

<div class="flex flex-col gap-3">
  <div class="flex flex-row gap-3">
    {#each weapons as weapon, index}
      <button
        on:click={() => ToggleActive(index)}
        class={`capitalize rounded-md p-3 shadow-md    ${
          !activeWeapons[index]
            ? "bg-fadedDarkGreen hover:bg-fadedGreen"
            : "bg-purple hover:bg-darkPurple"
        }`}>{weapon}</button
      >
    {/each}
  </div>
  <div class="flex flex-row gap-3 items-center">
    {#each stats as stat, index}
      <StatSlider {stat} {UpdateStat} {index} />
    {/each}
    <div class="flex flex-row items-center gap-2">
      <input id="includestances" type="checkbox" on:change={UpdateStatStances} />
      <label for="includestances">Include Stances</label>
    </div>
  </div>
  <div class="flex flex-row gap-3">
    {#each activeCharacters as character}
      <p class="p-3 shadow-lg w-fit h-fit bg-white bg-opacity-5 rounded-md">
        {character.name}
      </p>
    {/each}
  </div>
</div>
