<template>
  <div class="header-icons  hide-on-med-and-down">
    <ul class="right ">
      <li>
        <i
          class="material-icons dropdown-trigger"
          data-target="messageDropdown"
          ref="messageDropdown"
        >message</i>
      </li>
      <li>
        <i
          class="material-icons dropdown-trigger"
          data-target="notificationDropdown"
          ref="notificationDropdown"
        >notifications</i>
      </li>
      <li class="profile-avatar">
        <img src='img/avatar.jpg'
          class="dropdown-trigger "
          data-target="profileDropdown"
          ref="profileDropdown"
        >
      </li>
    </ul>

    <MessageDropdown />
    <NotificationDropdown />
    <ProfileDropdown />

  </div>
</template>


<script>
import MessageDropdown from "@/components/layout/MessageDropdown";
import NotificationDropdown from "@/components/layout/NotificationDropdown";
import ProfileDropdown from "@/components/layout/ProfileDropdown";

export default {
  name: "HeaderIcons",
  components: {
    MessageDropdown,
    NotificationDropdown,
    ProfileDropdown,
  },
  data() {
    return {
      messageDropdown: "",
      notificationDropdown: "",
      profileDropdown: "",

    };
  },
  mounted() {
    this.messageDropdown = M.Dropdown.init(this.$refs.messageDropdown, {
      inDuration: 300,
      outDuration: 225,
      belowOrigin: true, // Displays dropdown below the button
      alignment: "right",
      constrainWidth: false,
    });

    this.notificationDropdown = M.Dropdown.init(this.$refs.notificationDropdown, {
      inDuration: 300,
      outDuration: 225,
      belowOrigin: true, // Displays dropdown below the button
      alignment: "right",
      constrainWidth: false,
    });

     this.profileDropdown = M.Dropdown.init(this.$refs.profileDropdown, {
      inDuration: 300,
      outDuration: 225,
      belowOrigin: true, // Displays dropdown below the button
      alignment: "right",
      constrainWidth: false,
    });
  },

  destroyed() {
    this.messageDropdown.destroy();
    this.notificationDropdown.destroy();
    this.profileDropdown.destroy();
  },
};
</script>


<style lang="scss" scoped>
.header-icons {
  max-width: 300px;
}
ul {
  margin-right: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
i {
  color: rgba(0, 0, 21, 0.5);
  padding-left: 0.8rem;
  font-size: 30px;
  padding-right: 0.8rem;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 21, 0.8);
  }
}
.profile-avatar{
  display: flex;
  img{
    border-radius: 50%;
    width: 45px;
  }
}
</style>