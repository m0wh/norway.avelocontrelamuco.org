<template>
  <div class="link-title" :class="{ alt: transformed }">
    <div class="date">
      <p>{{ date }}</p>
      <p>J—{{ index }}</p>
    </div>

    <div class="from">
      <p>{{ from.lat_txt }}</p>
      <p>{{ from.name }}</p>
      <p>{{ from.countryISO }}</p>
    </div>

    <div class="to">
      <p>{{ to.lat_txt }}</p>
      <p>{{ to.name }}</p>
      <p>{{ to.countryISO }}</p>
    </div>

    <component :is="tag" class="title">
      <g-link v-if="url" :to="url">
        {{ title }}
      </g-link>

      <template v-else>
        {{ title }}
      </template>
    </component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LinkTitle extends Vue {
  @Prop({ required: true }) title?: string
  @Prop({ required: true }) index?: string
  @Prop({ required: true }) from?: Location
  @Prop({ required: true }) to?: Location
  @Prop({ required: true }) date?: string
  @Prop({ default: 'p' }) tag?: string
  @Prop() url?: string
  @Prop({ default: false }) transformed?: boolean
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .link-title {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: R(24) auto;
    column-gap: $gutter;
    row-gap: R(20);
    margin-bottom: R(75);

    .date {
      grid-column: 2 / 6;
      grid-row: 1;
      transform: translateX(calc(-100% - #{$gutter}));
      transition: 1.5s cubic-bezier(0.7, 0, 0, 1);

      p {
        margin: 0;
        font-size: R(10);
        text-align: right;
      }
    }

    .from,
    .to {
      grid-column: 1;
      grid-row: 2;
      font-size: R(10);
      width: 45%;

      p {
        margin: 0;
        font-size: R(10);
      }
    }

    .from {
      transition: 1s .2s cubic-bezier(0.83, 0, 0.17, 1);
    }

    .to {
      margin-left: 50%;
      transition: 1s cubic-bezier(0.83, 0, 0.17, 1);
    }

    .title {
      grid-column: 2 / span 5;
      grid-row: 2;
      font-size: R(90);
      margin: 0;

      a {
        color: currentColor;
        text-decoration: none;

        &:hover {
          color: var(--color-accent)
        }
      }
    }

    &.alt {
      .date {
        transform: translateX(0);
      }

      .from {
        transform: translateY(R(-44));
        width: 100%;
        transition: 1s cubic-bezier(0.83, 0, 0.17, 1);
      }

      .to {
        margin-left: 0;
        transition: 1s .2s cubic-bezier(0.83, 0, 0.17, 1);
      }
    }
  }
</style>
