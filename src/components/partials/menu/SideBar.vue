<template>
  <div>
    <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged">
      <template v-slot:navbar>
        <b-navbar
          id="mainNavbar"
          toggleable="lg"
          type="light"
          variant="light"
          fixed="top">
          <b-navbar-nav>
            <b-nav-item> </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>

              <!--<template v-slot:content>
                <b-container style="margin-top: -20px">
                    <router-view/>
                </b-container>
              </template>-->
    </BootstrapSidebar>
  </div>
</template>

<style scoped>
    body {
        padding: 1rem;
    }

    .side {
        color: white;
        background-color: #181818;
    }
</style>
<style lang="scss">
    @import "./default-theme.scss";
</style>
<script>
    import BootstrapSidebar from "vue-bootstrap-sidebar";
    export default {
    name: 'SideBar',
  components: {
      BootstrapSidebar,
  },
  data() {
    return {
      initialShow: true,
      header: '<h3>Welcome</h3> <h2>Jane Doe</h2>',
      links: [
        { name: "Home", href: { name: "home" }, faIcon: ["fas", "home"] },
        {
          name: "Dropdown",
          faIcon: ["fas", "tint"],
          children: [
            {
              name: "Child Item 1",
              href: {
                name: "child-item-1",
              },
              faIcon: ["fas", "child"],
            },
            {
              name: "Child Item 2",
              href: {
                name: "child-item-2",
              },
              faIcon: ["fas", "child"],
            },
          ],
        },
        { name: "About", href: { name: "about" }, faIcon: "users" },
        { name: "Contact", href: { name: "contact" }, faIcon: "phone" },
      ],
    };
  },
  methods: {
    onSidebarChanged() {},
  },
};
</script>