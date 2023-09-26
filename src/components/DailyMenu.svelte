<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchVillageTodaysMenu } from '../services/menu';

  let menuData: any = null;

  // Fetch menu data when the component is mounted
  onMount(async () => {
    try {
      menuData = await fetchVillageTodaysMenu();
    } catch (error: any) {
      console.error(error.message);
    }
  });
</script>

<div class="daily-menu">
  {#if menuData}
    <h4>Dagens meny:</h4>

    <p class="period-subheading">
      <span class="day-of-week">{menuData.day}</span> - Vecka <span class="week-number">{menuData.weekNumber}</span>
    </p>

    <ul>
      {#each menuData.choices as choice}
        <li>
          <p>{choice}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Hämtar menyn...</p>
  {/if}
</div>

<style lang="scss">
  .daily-menu {
    margin-top: 1rem;
  }

  h4 {
    margin-bottom: 1.6rem;
  }

  .period-subheading {
    font-size: 1.2rem !important;
    font-weight: bold;
    margin-bottom: 1rem;
    text-decoration:underline;
  }

  ul {
    li {
      padding: 1rem;
      margin-bottom: 0.8rem;
      background-color: #E8AF74;
      color: #2C3D28;
      border-radius: 15px;
      width: 60rem;
    }
  }
</style>
