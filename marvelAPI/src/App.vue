<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col v-for="quadrinho in quadrinhos" :key="quadrinho.id" cols="12" sm="6" md="4">
            <v-card>
              <v-img :src="getImagem(quadrinho)" aspect-ratio="1">
                <v-card-title>{{ quadrinho.title }}</v-card-title>
              </v-img>
              <v-card-text>{{ quadrinho.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MarvelApi from './services/MarvelAPI';

export default {
  name: 'App',
  data() {
    return {
      quadrinhos: []
    }
  },
  async created() {
    try {
      const response = await MarvelApi.getAllComics(10);
      this.quadrinhos = response.data.data.results;
    } catch (error) {
      console.error('Erro ao buscar quadrinhos:', error);
    }
  },
  methods: {
    getImagem(quadrinho) {
      if (quadrinho.images.length > 0) {
        return `${quadrinho.images[0].path}/portrait_medium.${quadrinho.images[0].extension}`;
      }
      // Retornar uma imagem padrão caso não haja imagem disponível
      return 'caminho_para_uma_imagem_padrao.jpg';
    }
  }
}
</script>
