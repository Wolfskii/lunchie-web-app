<script lang="ts"></script>

  <ul class="week-day-menu">
    <li class="day-button">
      <a href="#">Måndag</a>
    </li>
    <li class="day-button">
      <a href="#">Tisdag</a>
    </li>
    <li class="day-button">
      <a href="#">Onsdag</a>
    </li>
    <li class="day-button">
      <a href="#">Torsdag</a>
    </li>
    <li class="day-button">
      <a href="#">Fredag</a>
    </li>
  </ul>

<style lang="scss">
  .week-day-menu {
    margin-top: 2rem;
    display: flex;
    gap: 0.6rem;
  }

  .day-button {
    padding: 0.5rem 0.8rem;
    background-color: #E8AF74;
    color: #2C3D28;
    border-radius: 15px;

    &:hover {
      background-color: #151d13;
      color: #E8AF74;
      cursor: pointer;
    }
  }
</style>
