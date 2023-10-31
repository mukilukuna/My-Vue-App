<template>
  <div>
    <h2>Dashboard</h2>
    <ul>
      <li>
        <router-link to="/reports" class="menu-item">
          <div class="icon reports-icon"></div>
          <div class="menu-text">Rapportages</div>
        </router-link>
      </li>
      <li>
        <router-link to="/documentation" class="menu-item">
          <div class="icon documentation-icon"></div>
          <div class="menu-text">Kennisbase Documentatie</div>
        </router-link>
      </li>
      <li>
        <router-link to="/settings" class="menu-item">
          <div class="icon settings-icon"></div>
          <div class="menu-text">Instellingen</div>
        </router-link>
      </li>
      <li>
        <router-link to="/login" class="menu-item">
          <div class="icon login-icon"></div>
          <div class="menu-text">Login</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashboardMenu' // Gewijzigde naam naar 'DashboardMenu'
}
</script>

<style scoped>

.menu-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
}

.reports-icon {
  background-image: url('~@/assets/reports-icon.png');
}

.documentation-icon {
  background-image: url('~@/assets/documentation-icon.png');
}

.settings-icon {
  background-image: url('~@/assets/settings-icon.png');
}

.login-icon {
  background-image: url('~@/assets/login-icon.png');
}

.menu-text {
  font-size: 16px;
  display: flex;
  align-items: center;
}

nav a.active {
  font-weight: bold;
}
</style>
