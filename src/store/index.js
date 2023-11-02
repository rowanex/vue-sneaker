import { createStore } from "vuex";
import { sneakersModule } from "./sneakerModule";

export default createStore({
  modules: {
    sneakers: sneakersModule,
  },
});
