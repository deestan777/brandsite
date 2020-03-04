<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <v-card tile>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mauris ut neque luctus sollicitudin in in lacus. Vivamus vehicula quam in auctor posuere. Sed ullamcorper sed ligula sed ultrices. Ut et leo ut tellus vestibulum ultricies. Fusce interdum magna est. Nulla facilisi. Donec porta, urna ac finibus faucibus, est diam sollicitudin libero, a sollicitudin ligula augue vitae massa. Etiam non quam maximus, pulvinar sapien ut, consequat massa. Praesent viverra massa elit. Donec egestas tellus ut ante ultrices, id elementum est vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

                Sed fermentum, magna nec accumsan tincidunt, ligula dui congue lectus, a tincidunt nibh leo et nisi. Aenean non mi at nunc blandit sodales nec at augue. Sed sit amet nisi massa. Morbi pellentesque felis non justo malesuada tristique. Vestibulum sed elit lectus. Sed in sodales justo. In fermentum ante nec gravida feugiat.

                In bibendum mattis convallis. Sed viverra risus mollis lectus ultricies suscipit. Nulla faucibus mollis metus, vel aliquet quam gravida vel. Etiam facilisis egestas nibh vel mattis. Maecenas mauris urna, commodo non odio et, vestibulum faucibus sapien. Proin consectetur eros et convallis posuere. Morbi interdum suscipit augue sed sagittis. Proin a velit a elit venenatis tincidunt in et urna. Etiam eleifend, magna eget consequat bibendum, justo sapien facilisis ante, sed laoreet ligula arcu vitae eros.

                Donec eu lobortis massa. Integer dictum consectetur eros. Donec nisi lectus, pulvinar ut vestibulum quis, eleifend eget turpis. Etiam id urna sit amet turpis elementum finibus nec vitae mauris. Maecenas at risus at enim ultrices euismod non eget lacus. Aliquam neque dolor, cursus a quam vitae, eleifend interdum leo. Proin turpis lacus, congue porta viverra ut, fermentum id sem. Pellentesque ut efficitur purus. Integer finibus id libero sed iaculis.

                Nulla rutrum leo ut urna rutrum, commodo vestibulum orci accumsan. Ut condimentum nunc a efficitur hendrerit. Nulla facilisi. Cras a mi id magna pulvinar eleifend et eu nisi. Donec ex massa, egestas sit amet lobortis in, auctor in urna. Ut egestas eleifend ex, a placerat velit semper aliquet. Mauris in fermentum mi. Vivamus varius velit lobortis tincidunt sollicitudin. Phasellus at varius diam, sed pharetra est. Vestibulum ac felis et est luctus sodales. Pellentesque nec mauris consequat, ultrices turpis in, pretium elit. Phasellus eget nisl vel mauris sollicitudin mattis quis vel quam. Sed quis feugiat nisi, et feugiat magna. In molestie velit at mollis facilisis. Suspendisse ornare ac lorem sed finibus. Etiam faucibus ligula at ligula mattis gravida eu sed mi.
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
  })
};
</script>
