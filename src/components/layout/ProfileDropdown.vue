<template>
  <!-- Dropdown Structure -->
  <div id="profileDropdown" class="dropdown-content profileDropdown">
    <div class="profileDropdown__header">Profile</div>
    <ul class="profileDropdown-list">
      <li class="profileDropdown-list__item">
        <router-link to="/">
          <i class="material-icons">people</i>
          Profile
        </router-link>
      </li>
      <li class="profileDropdown-list__item">
        <router-link to="/">
          <i class="material-icons">settings</i>
          Settings
        </router-link>
      </li>

      <li class="profileDropdown-list__item">
        <router-link to="/">
          <i class="material-icons">attach_money</i>
          Billing
        </router-link>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
.dropdown-content {
  overflow: visible;
}
.profileDropdown {
  &-list {
    display: flex;
    flex-direction: column;
    &:focus {
      outline: none;
      border: none;
    }
    &__item {
      padding: 0.5rem 1.25rem;
      display: flex;
      flex-direction: column;
      a{
          &:hover{
              background: none;
          }
      }
    }
  }
  &__header {
    display: block;
    margin-bottom: 0;
    text-align: center !important;
    font-size: 13px;
    min-height: 34px;
    line-height: 34px;
    white-space: nowrap;
    background-color: #ebedef;
    color: #8a93a2;
    padding: 5px;
  }
}
</style>