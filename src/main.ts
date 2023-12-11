import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(pinia).use(router).mount('#app');
