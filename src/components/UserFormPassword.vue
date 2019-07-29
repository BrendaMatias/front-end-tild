<template>
  <transition>
    <label for="oldpassword">Old password</label>
    <input type="oldpassword" name="oldpassword" id="oldpassword" />
    <label for="newpassword">New password</label>
    <input type="newpassword" name="newpassword" id="newpassword" />
    <label for="password">Confirm new password</label>
    <input type="password" name="password" id="password" />
  </transition>
</template>

<script>
export default {
    name: "UserFormPassword"
}
</script>