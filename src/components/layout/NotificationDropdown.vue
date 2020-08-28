<template>
  <!-- Dropdown Structure -->
  <div id="notificationDropdown" class="dropdown-content notificationDropdown">
    <div class="notificationDropdown__header">You have 2 unreaded notifications!</div>
    <ul class="notificationDropdown-list">
      <li class="notificationDropdown-list__item">
        <div class="header">
          <span class="date">10 May</span>
        </div>
        <div class="title">Team meeting on 11.00 AM</div>
      </li>

      <li class="notificationDropdown-list__item">
        <div class="header">
          <span class="date">10 May</span>
        </div>
        <div class="title">Team party on 09.00 PM</div>
      </li>
    </ul>

    <div class="notificationDropdown__footer">
      <router-link to="/">View all notifications</router-link>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.dropdown-content {
  overflow: visible;
}
.notificationDropdown {
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
      .header {
        display: flex;
        justify-content: flex-start;
        span {
          color: #768192;
          font-size: 11px;
        }
      }
      .title {
        font-size: 14px;
        color: #4f5d73;
        font-weight: 600;
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
  &__footer {
    text-align: center;
    a {
      color: #4f5d73;
      font-weight: 600;
      font-size: 14px;
      border-top: 1px solid grey;
      min-height: 34px;
      line-height: 34px;
      padding: 5px;
    }
  }
}
</style>