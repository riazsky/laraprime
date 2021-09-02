<template>
  <div>
    <Menubar :model="items" class="p-shadow-1 sticky-top">
      <template #start>
        <Button v-on:click="fully()">
          <span v-show="toggle">Hide</span>
          <span v-show="!toggle">Show</span>
        </Button>
        <Button v-on:click="changeTheme()">THeme</Button>
      </template>

      <template #end>
        <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
        <InputText placeholder="Search Keywords.."></InputText>
      </template>
    </Menubar>
    <div class="p-grid">
      <div class="p-col-3 p-mt-2 p-d-none p-d-md-block" v-if="toggle">
        <!-- <Sidebar></Sidebar> -->

            <ScrollPanel style="width: 100%;" class="vh-100 custom p-shadow-1 bg-white">
              hello world
              content
              Lorem ipsum dolor sit amet consectetur
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id unde deleniti quo et, consectetur, dignissimos aspernatur a eaque dicta placeat vitae? Doloremque necessitatibus illo, aliquam perferendis dolor magni iusto ab!
              adipisicing elit. Doloribus quam dolorem praesentium ducimus harum perspiciatis facere vero suscipit adipisci eius consequuntur quibusdam enim magnam unde, accusamus placeat itaque, at recusandae.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ipsa fugit quas odit at quasi, voluptatem excepturi beatae illo blanditiis, esse consequuntur ea culpa nisi incidunt id tempora modi eius!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, perferendis qui. Aspernatur asperiores officia nostrum, consectetur ipsa hic praesentium modi amet cumque deserunt magni excepturi saepe. Nemo laudantium iste culpa.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, culpa aut labore exercitationem quidem minus assumenda iusto error dolor minima velit accusamus aliquid quo cum sed voluptas. Expedita, sequi assumenda!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim repellendus earum soluta optio expedita sapiente recusandae eum? Illum dolores consectetur temporibus saepe sed doloribus perferendis voluptatibus, libero eligendi labore molestiae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis nobis dolorum sed modi animi minima reprehenderit rem aperiam eum, quia nihil. Illum necessitatibus omnis velit adipisci nemo nostrum alias.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ducimus, quis nesciunt tempore aperiam recusandae quasi ab, fuga vel laborum fugiat tenetur inventore nostrum iste nemo eaque quo laudantium aliquid.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio blanditiis ab. Vel voluptate veritatis, culpa totam nam ducimus quaerat quia explicabo, quo fugiat quae asperiores assumenda at facilis pariatur?
            </ScrollPanel>
      </div>
      <div :class="classItem">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import Sidebar from "./Sidebar";
import ScrollPanel from "primevue/scrollpanel";

export default {
  name: "App",
  components: {
    Menubar,
    Sidebar,
    ScrollPanel
  },
  mounted() {
    if (this.theme == true) {
      import("primevue/resources/themes/bootstrap4-dark-blue/theme.css");
    } else {
      // import('primevue/resources/themes/bootstrap4-light-blue/theme.css')
      import("primevue/resources/themes/nova-vue/theme.css");
      // import('primevue/resources/themes/nova/theme.css')
    }
  },
  data() {
    return {
      items: [
        {
          label: "File",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-plus",
              items: [
                {
                  label: "Bookmark",
                  icon: "pi pi-fw pi-bookmark",
                  to: "/new-file-name"
                },
                {
                  label: "Video",
                  icon: "pi pi-fw pi-video",
                  to: "/about"
                }
              ]
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-trash"
            },
            {
              separator: true
            },
            {
              label: "Export",
              icon: "pi pi-fw pi-external-link"
            }
          ]
        },
        {
          label: "Create Designation",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Left",
              icon: "pi pi-fw pi-align-left",
              to: "/create-designation"
            },
            {
              label: "Create Department",
              icon: "pi pi-fw pi-align-right",
              to: '/create-department'
            },
            {
              label: "Center",
              icon: "pi pi-fw pi-align-center"
            },
            {
              label: "Justify",
              icon: "pi pi-fw pi-align-justify"
            }
          ]
        },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus"
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus"
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print"
                    }
                  ]
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List"
                }
              ]
            }
          ]
        },
        {
          label: "Events",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
              items: [
                {
                  label: "Save",
                  icon: "pi pi-fw pi-calendar-plus"
                },
                {
                  label: "Delete",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus"
                }
              ]
            }
          ]
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off"
        }
      ],
      toggle: true,
      classItem: "p-col-9 p-mt-2",
      theme: false
    };
  },
  methods: {
    fully() {
      this.toggle = !this.toggle;
      if (this.toggle == true) {
        this.classItem = "p-col-9 p-mt-2";
      } else {
        this.classItem = "p-col-12 p-mt-2";
      }
    },
    changeTheme() {
      this.theme = !this.theme;
      if (this.theme == true) {
        document.body.style.backgroundColor = "##f8fafc";
        document.body.style.color = "#00000";
        // require('primevue/resources/themes/nova-vue/theme.css')
        import("primevue/resources/themes/nova-vue/theme.css");
      } else {
        document.body.style.backgroundColor = "rgb(31 39 51)";
        document.body.style.color = "rgb(255 255 255 / 87%)";
        // require('primevue/resources/themes/bootstrap4-dark-blue/theme.css')
        import("primevue/resources/themes/bootstrap4-dark-blue/theme.css");
      }
    }
  }
};
</script>

<style  scoped>
.p-menubar {
  border-radius: 0px;
}

.p-scrollpanel-bar {
  background-color: #1976d2;
  opacity: 1;
  transition: background-color 0.3s;
}

.p-scrollpanel-bar:hover {
  background-color: #135ba1;
}
</style>
