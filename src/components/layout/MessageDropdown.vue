<template>
  <!-- Dropdown Structure -->
  <div id="messageDropdown" class="dropdown-content messageDropdown">
    <div class="messageDropdown__header">You have 7 messages!</div>
    <ul class="messageDropdown__messages">
      <li class="messageDropdown__messages-item">
        <div class="avatar">
          <img src="img/avatar.jpg" alt />
        </div>
        <div class="text">
          <div class="header">
            <span class="name">John Doe</span>
            <span class="date">5 minutes ago</span>
          </div>
          <div class="title">Very important message from John Doe</div>
        </div>
      </li>

      <li class="messageDropdown__messages-item">
        <div class="avatar">
          <img src="img/avatar.jpg" alt />
        </div>
        <div class="text">
          <div class="header">
            <span class="name">Jane Doe</span>
            <span class="date">10 May</span>
          </div>
          <div class="title">Lorem ipsum</div>
        </div>
      </li>
    </ul>

    <div class="messageDropdown__footer">
      <router-link to="/">View all messages</router-link>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.dropdown-content {
  overflow: visible;
}
.messageDropdown {
  &__messages {
    display: flex;
    flex-direction: column;
    &:focus {
      outline: none;
      border: none;
    }
    &-item {
      padding: 0.5rem 1.25rem;
      display: flex;
      align-items: center;
      .avatar {
        width: 15%;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .text {
        padding-left: 10px;
        width: 100%;

        .header {
          display: flex;
          justify-content: space-between;
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